import React from 'react';
import Helmet from 'react-helmet';

import { match, RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';

export default function useRouter({ res, req, routes, initialState }) {
  match({ routes, location: req.url }, (error, redirect, renderProps) => {
    if (error) {
      throw error;
    }
    if (redirect) {
      return res.redirect(302, redirect.pathname + redirect.search);
    }
    if (renderProps) {
      const content = renderToString(
        <RouterContext {...renderProps} />
      );
      const meta = typeof(window) === 'undefined' ? (Helmet.rewind()).meta : null;
      res.render('index', { content, initialState, meta });
    }
  });
}
