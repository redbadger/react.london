import React from 'react';
import { match, RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import ErrorPage500 from '../shared/components/ErrorPage500';

export default function useRouter({ res, req, routes, initialState }) {
  match({ routes, location: req.url }, (error, redirect, renderProps) => {
    if (error) {
      const content = renderToString(
        <ErrorPage500 />
      );
      res.render('index', { content });
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
    res.render('index', { content: 'TODO: You hit the server 404' });
  });
}

