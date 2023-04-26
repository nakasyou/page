import { serve } from 'https://deno.land/std@0.184.0/http/server.ts'
import { Hono } from 'https://deno.land/x/hono@v3.1.6/mod.ts'
import { serveStatic } from "https://deno.land/x/hono@v3.1.6/middleware.ts"

const app = new Hono()

app.use('/*', serveStatic({
  root: "./dist/",
}))

serve(app.fetch)
