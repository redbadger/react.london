import { match } from 'react-router';

export function useRoutes(res, routes, location, viewFunc) {
  match({ routes, location }, (error, redirect, renderProps) => {
    if (error) {
      return res.status(500).send(error.message);
    }
    if (redirect) {
      return res.redirect(302, redirect.pathname + redirect.search);
    }
    if (renderProps) {
      return viewFunc(res, renderProps);
    }
    res.status(404).send('Not found');
  });
}
