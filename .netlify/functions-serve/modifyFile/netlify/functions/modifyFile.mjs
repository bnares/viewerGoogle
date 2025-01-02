
import {createRequire as ___nfyCreateRequire} from "module";
import {fileURLToPath as ___nfyFileURLToPath} from "url";
import {dirname as ___nfyPathDirname} from "path";
let __filename=___nfyFileURLToPath(import.meta.url);
let __dirname=___nfyPathDirname(___nfyFileURLToPath(import.meta.url));
let require=___nfyCreateRequire(import.meta.url);


// netlify/functions/modifyFile.ts
var modifyFile_default = async (request) => {
  const data = await request.json();
  const { file, token, fieldId } = data;
  if (fieldId === String || token === String && file === Blob) {
    fetch(`https://www.googleapis.com/upload/drive/v3/files/${fieldId}`, {
      method: "PATH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: file
    });
  }
};
export {
  modifyFile_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibmV0bGlmeS9mdW5jdGlvbnMvbW9kaWZ5RmlsZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0KT0+e1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG4gICAgY29uc3Qge2ZpbGUsIHRva2VuLCBmaWVsZElkfSA9IGRhdGE7XHJcbiAgICBpZihmaWVsZElkID09PSBTdHJpbmcgfHwgdG9rZW4gPT09IFN0cmluZyAmJiBmaWxlID09PSBCbG9iKXtcclxuICAgICAgICBmZXRjaChgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vdXBsb2FkL2RyaXZlL3YzL2ZpbGVzLyR7ZmllbGRJZH1gLHtcclxuICAgICAgICAgICAgbWV0aG9kOlwiUEFUSFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTpmaWxlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7QUFDQSxJQUFPLHFCQUFRLE9BQU8sWUFBbUI7QUFDckMsUUFBTSxPQUFPLE1BQU0sUUFBUSxLQUFLO0FBQ2hDLFFBQU0sRUFBQyxNQUFNLE9BQU8sUUFBTyxJQUFJO0FBQy9CLE1BQUcsWUFBWSxVQUFVLFVBQVUsVUFBVSxTQUFTLE1BQUs7QUFDdkQsVUFBTSxvREFBb0QsT0FBTyxJQUFHO0FBQUEsTUFDaEUsUUFBTztBQUFBLE1BQ1AsU0FBUTtBQUFBLFFBQ0osZUFBZSxVQUFVLEtBQUs7QUFBQSxRQUM5QixnQkFBZ0I7QUFBQSxNQUNwQjtBQUFBLE1BQ0EsTUFBSztBQUFBLElBQ1QsQ0FBQztBQUFBLEVBQ0w7QUFDSjsiLAogICJuYW1lcyI6IFtdCn0K
