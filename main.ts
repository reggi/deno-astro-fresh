import {ConnInfo, serve} from "https://deno.land/std@0.153.0/http/server.ts";
import { handle as handleAstro } from './.astro/dist/server/entry.mjs';
import { handle as handleFresh } from './fresh/main.ts';

serve(async (req: Request, connInfo: ConnInfo) => {
  const fresh = await handleFresh(req, connInfo);
  const freshNotFound = fresh.status === 404
  if (!freshNotFound)return fresh;
  return handleAstro(req);
}, { port: 8009 });