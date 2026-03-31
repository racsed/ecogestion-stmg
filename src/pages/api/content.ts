export const prerender = false; // This route must be server-rendered

import type { APIRoute } from 'astro';

const GITHUB_TOKEN = import.meta.env.GITHUB_TOKEN;
const ADMIN_PASSWORD = import.meta.env.ADMIN_PASSWORD || 'Stmg26';
const REPO = 'racsed/ecogestion-stmg';

// Auth check
function checkAuth(request: Request): boolean {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader) return false;
  const password = authHeader.replace('Bearer ', '');
  return password === ADMIN_PASSWORD;
}

// GitHub API helper
async function githubAPI(path: string, options: RequestInit = {}) {
  const res = await fetch(`https://api.github.com/repos/${REPO}/${path}`, {
    ...options,
    headers: {
      'Authorization': `token ${GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
  return res.json();
}

export const GET: APIRoute = async ({ request, url }) => {
  if (!checkAuth(request)) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const file = url.searchParams.get('file');
  if (!file) {
    return new Response(JSON.stringify({ error: 'Missing file param' }), { status: 400 });
  }

  const isDir = url.searchParams.get('dir') === 'true';

  try {
    const data = await githubAPI(`contents/${file}`);

    // Directory listing
    if (isDir && Array.isArray(data)) {
      const files = data.map((f: any) => ({
        name: f.name,
        path: f.path,
        size: f.size,
        sha: f.sha,
        download_url: f.download_url,
      }));
      return new Response(JSON.stringify({ files }), { status: 200 });
    }

    const content = atob(data.content);
    return new Response(JSON.stringify({ content, sha: data.sha }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Failed to fetch file' }), { status: 500 });
  }
};

export const POST: APIRoute = async ({ request }) => {
  if (!checkAuth(request)) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const body = await request.json();
  const { file, content, sha, message, binary } = body;

  // Handle delete requests
  if (body.delete === true) {
    if (!file || !sha) {
      return new Response(JSON.stringify({ error: 'Missing file or sha for delete' }), { status: 400 });
    }
    try {
      const data = await githubAPI(`contents/${file}`, {
        method: 'DELETE',
        body: JSON.stringify({
          message: message || `Delete ${file} via admin panel`,
          sha: sha,
          branch: 'main',
        }),
      });
      return new Response(JSON.stringify({ success: true, commit: data.commit?.sha }), { status: 200 });
    } catch (e) {
      return new Response(JSON.stringify({ error: 'Failed to delete file' }), { status: 500 });
    }
  }

  if (!file || !content) {
    return new Response(JSON.stringify({ error: 'Missing file or content' }), { status: 400 });
  }

  try {
    // For binary uploads (PDF, images), content is already base64
    const encodedContent = binary ? content : btoa(unescape(encodeURIComponent(content)));

    const data = await githubAPI(`contents/${file}`, {
      method: 'PUT',
      body: JSON.stringify({
        message: message || `Update ${file} via admin panel`,
        content: encodedContent,
        sha: sha,
        branch: 'main',
      }),
    });
    return new Response(JSON.stringify({ success: true, commit: data.commit?.sha }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Failed to save file' }), { status: 500 });
  }
};
