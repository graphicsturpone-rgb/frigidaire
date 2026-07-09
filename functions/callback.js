export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const client_id = env.GITHUB_CLIENT_ID;
  const client_secret = env.GITHUB_CLIENT_SECRET;

  if (!code) {
    return new Response("Missing code parameter from GitHub.", { status: 400 });
  }
  if (!client_id || !client_secret) {
    return new Response("Missing GITHUB_CLIENT_ID or GITHUB_CLIENT_SECRET environment variable in Cloudflare Pages.", { status: 500 });
  }

  try {
    const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        client_id,
        client_secret,
        code,
      }),
    });

    const tokenData = await tokenResponse.json();

    if (tokenData.error) {
      return new Response(`OAuth Error: ${tokenData.error_description || tokenData.error}`, { status: 400 });
    }

    const token = tokenData.access_token;

    // Return HTML page with script to post the authentication token back to Decap CMS parent window
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Authorized</title>
      </head>
      <body>
        <script>
          const token = "${token}";
          const message = {
            type: "authorization:github:success",
            token: token,
            provider: "github"
          };
          // Communicate token back to Decap CMS parent window
          window.opener.postMessage(JSON.stringify(message), window.location.origin);
          window.close();
        </script>
      </body>
      </html>
    `;

    return new Response(html, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  } catch (error) {
    return new Response(`OAuth Exchange Failed: ${error.message}`, { status: 500 });
  }
}
