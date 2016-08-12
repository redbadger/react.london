import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from '../../shared/components/conference-routes';
import { COMMUNITY_URL } from '../constants';

function router(req, res) {
  if (req.path === '/community') { return res.redirect(COMMUNITY_URL); }
  const location = req.url;
  match({ routes, location }, (error, redirect, renderProps) => {
    if (error) {
      return res.status(500).send(error.message);
    }
    if (redirect) {
      return res.redirect(302, redirect.pathname + redirect.search);
    }
    if (renderProps) {
      const content = renderToString(<RouterContext {...renderProps} />);
      return res.render('index', { content, initialState: {} });
    }
    res.status(404).send('Not found');
  });
}

export default router;
