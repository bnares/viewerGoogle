import * as bootstrap from './___netlify-bootstrap.mjs';import * as func from './netlify/functions/modifyFile.mjs';const funcModule = typeof func.default === "function" ? func : func.default;export const handler = bootstrap.getLambdaHandler(funcModule)