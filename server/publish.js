import { store } from './storage';

export function publishPage({ path, body }) {
  return store(path, body);
}

export function publishSite(pages) {
  return Promise.all(
    pages.map(publishPage)
  );
}
