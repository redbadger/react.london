import React from 'react';
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
      res.render('index', { content, initialState });
    }
    res.status(404).send('Not found');
  });
}
