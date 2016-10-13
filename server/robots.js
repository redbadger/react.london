export default function robotsTxt(req, res) {
  const blocking = process.env.BLOCK_CRAWLERS;
  const txt = blocking
    ? 'User-agent: *\nDisallow: /'
    : 'User-agent: *\nAllow: /';
  res.header('Content-Type', 'text/plain')
    .status(200)
    .send(txt);
}
