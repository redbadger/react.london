import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext } from 'react-router';
import routes from '../../shared/components/conference-routes';
import { COMMUNITY_URL } from '../constants';
import { useRoutes } from '../routes';

function sendSite(res, renderProps) {
  const content = renderToString(<RouterContext {...renderProps} />);
  return res.render('index', { content, initialState: {} });
}

function router(req, res) {
  if (req.path === '/community') {
    res.redirect(COMMUNITY_URL);
  } else {
    const location = req.url;
    useRoutes(res, routes, location, sendSite);
  }
}

export default router;
