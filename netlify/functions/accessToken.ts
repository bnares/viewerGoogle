import { google } from "googleapis";

export default async (request: Request) => {
  const data = await request.json();

  const { code, clientId, clientSecret, env } = data;

  const oauth = new google.auth.OAuth2(clientId, clientSecret, env);

  const { tokens } = await oauth.getToken(code);

  oauth.setCredentials(tokens);

  return new Response(JSON.stringify(tokens.access_token), { status: 200 });
};
