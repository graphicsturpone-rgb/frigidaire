export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const client_id = env.GITHUB_CLIENT_ID;

  if (!client_id) {
    return new Response("Missing GITHUB_CLIENT_ID environment variable in Cloudflare Pages settings.", { status: 500 });
  }

  // Redirect uri must match the one configured in the GitHub OAuth application
  const redirect_uri = `${url.origin}/callback`;
  const authorizeUrl = `https://github.com/login/oauth/authorize?client_id=${client_id}&scope=repo&redirect_uri=${encodeURIComponent(redirect_uri)}`;

  return Response.redirect(authorizeUrl, 302);
}
