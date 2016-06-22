import * as storage from '../storage';
import { compileSite } from '../static-site';
import { publishSite } from '../publish';

export function create(req, res) {
  const site = compileSite(req.body);
  Promise.all([
    publishSite(site),
    storage.put('data/site.json', JSON.stringify(req.body)),
  ])
  .then(() => res.sendStatus(201))
  .catch(() => res.sendStatus(503));
}

export function show(req, res) {
  storage.get('data/site.json')
    .then(data =>
      res.status(200)
        .set('Content-Type', 'Application/JSON')
        .send(data)
    )
    .catch(() =>
      res.status(404)
        .json({ error: 'Cannot load site state.' })
    );
}
