export default function enforceHTTPS() {
  return (req, res, next) => {
    // Behind the load balancer we operate over HTTP, so we check
    // the X-Forwarded-Proto header to get the original protocol
    const localSecure = req.secure;
    const originSecure = req.get('X-Forwarded-Proto') === 'https';
    if (originSecure || localSecure) {
      next();
    } else {
      res.redirect(301, 'https://' + req.headers.host + req.originalUrl);
    }
  };
}
