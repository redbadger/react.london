import path from 'path';

export function notFound(req, res) {
  res.sendStatus(404);
}

export function index(req, res) {
  const filePath = path.join(__dirname, '../../app', 'index.html');
  res.sendFile(filePath);
}
