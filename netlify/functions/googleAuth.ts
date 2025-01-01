import { google } from "googleapis";

export default async (request: Request) => {
  const data = await request.json();

  const { clientId, scopes, clientSecret, env } = data;
  const oauth = new google.auth.OAuth2(clientId, clientSecret, env);
  const url = oauth.generateAuthUrl({
    scope: scopes,
  });

  return new Response(JSON.stringify(url), { status: 200 });
};
