import { put } from './storage';

export function publishPage({ path, body }) {
  return put(path, body);
}

export function publishSite(pages) {
  return Promise.all(
    pages.map(publishPage)
  );
}
