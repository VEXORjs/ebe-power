/**
 * EBE POWER — produkcyjny serwer statyczny (Cloud Run / Cloud Build).
 *
 * Serwuje zbudowaną aplikację z katalogu `dist/` i obsługuje routing SPA
 * (każdy nieznany adres bez rozszerzenia → index.html, dzięki czemu
 * działają bezpośrednie wejścia np. na /oferta czy /kontakt).
 *
 * Bez zależności zewnętrznych — wymaga tylko Node.js 20+.
 */
import { createServer } from 'node:http'
import { createReadStream, existsSync, statSync } from 'node:fs'
import { extname, join, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
const here = fileURLToPath(new URL('.', import.meta.url))
const root = resolve(join(here, 'dist'))
const port = Number(process.env.PORT) || 8080
const host = process.env.HOST || '0.0.0.0'
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
}
function send(req, res, filePath, { immutable = false, status = 200 } = {}) {
  const type = MIME[extname(filePath).toLowerCase()] ?? 'application/octet-stream'
  const headers = {
    'Content-Type': type,
    'X-Content-Type-Options': 'nosniff',
    'Cache-Control': immutable
      ? 'public, max-age=31536000, immutable'
      : 'public, max-age=0, must-revalidate',
  }
  if (req.method === 'HEAD') {
    res.writeHead(status, headers)
    res.end()
    return
  }
  const size = statSync(filePath).size
  res.writeHead(status, { ...headers, 'Content-Length': size })
  createReadStream(filePath).pipe(res)
}
const server = createServer((req, res) => {
  if (!existsSync(join(root, 'index.html'))) {
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end('Brak katalogu dist/ — uruchom najpierw `npm run build`.')
    return
  }
  let pathname
  try {
    pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname)
  } catch {
    pathname = '/'
  }
  // Bezpieczeństwo: nie pozwalamy wyjść poza katalog dist/
  const target = resolve(join(root, pathname))
  const inRoot = target === root || target.startsWith(root + sep)
  if (inRoot && existsSync(target) && statSync(target).isFile()) {
    const isAsset = target.includes(`${sep}assets${sep}`) || target.includes(`${sep}images${sep}`)
    send(req, res, target, { immutable: isAsset })
    return
  }
  // Pliki z rozszerzeniem, których nie ma → realne 404 (nie index.html)
  if (extname(pathname)) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end('404 — nie znaleziono pliku')
    return
  }
  // Fallback dla routingu po stronie klienta (React Router)
  send(req, res, join(root, 'index.html'))
})
server.listen(port, host, () => {
  console.log(`EBE POWER — serwer działa na http://${host}:${port} (katalog: ${root})`)
})
