
import {createRequire as ___nfyCreateRequire} from "module";
import {fileURLToPath as ___nfyFileURLToPath} from "url";
import {dirname as ___nfyPathDirname} from "path";
let __filename=___nfyFileURLToPath(import.meta.url);
let __dirname=___nfyPathDirname(___nfyFileURLToPath(import.meta.url));
let require=___nfyCreateRequire(import.meta.url);


// netlify/functions/googleAuth.ts
import { google } from "googleapis";
var googleAuth_default = async (request) => {
  const data = await request.json();
  const { clientId, scopes, clientSecret, env } = data;
  const oauth = new google.auth.OAuth2(clientId, clientSecret, env);
  const url = oauth.generateAuthUrl({
    scope: scopes
  });
  return new Response(JSON.stringify(url), { status: 200 });
};
export {
  googleAuth_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibmV0bGlmeS9mdW5jdGlvbnMvZ29vZ2xlQXV0aC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgZ29vZ2xlIH0gZnJvbSBcImdvb2dsZWFwaXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0KSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG5cclxuICBjb25zdCB7IGNsaWVudElkLCBzY29wZXMsIGNsaWVudFNlY3JldCwgZW52IH0gPSBkYXRhO1xyXG4gIGNvbnN0IG9hdXRoID0gbmV3IGdvb2dsZS5hdXRoLk9BdXRoMihjbGllbnRJZCwgY2xpZW50U2VjcmV0LCBlbnYpO1xyXG4gIGNvbnN0IHVybCA9IG9hdXRoLmdlbmVyYXRlQXV0aFVybCh7XHJcbiAgICBzY29wZTogc2NvcGVzLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHVybCksIHsgc3RhdHVzOiAyMDAgfSk7XHJcbn07XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7QUFBQSxTQUFTLGNBQWM7QUFFdkIsSUFBTyxxQkFBUSxPQUFPLFlBQXFCO0FBQ3pDLFFBQU0sT0FBTyxNQUFNLFFBQVEsS0FBSztBQUVoQyxRQUFNLEVBQUUsVUFBVSxRQUFRLGNBQWMsSUFBSSxJQUFJO0FBQ2hELFFBQU0sUUFBUSxJQUFJLE9BQU8sS0FBSyxPQUFPLFVBQVUsY0FBYyxHQUFHO0FBQ2hFLFFBQU0sTUFBTSxNQUFNLGdCQUFnQjtBQUFBLElBQ2hDLE9BQU87QUFBQSxFQUNULENBQUM7QUFFRCxTQUFPLElBQUksU0FBUyxLQUFLLFVBQVUsR0FBRyxHQUFHLEVBQUUsUUFBUSxJQUFJLENBQUM7QUFDMUQ7IiwKICAibmFtZXMiOiBbXQp9Cg==
