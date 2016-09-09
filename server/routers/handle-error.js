import ErrorPage500 from '../../shared/components/ErrorPage500';
import { renderToString } from 'react-dom/server';
import React from 'react';

export default function makeErrorHandler(res, Layout) {
  return () => {
    const content = renderToString(
      <Layout>
        <ErrorPage500 />
      </Layout>
    );
    res.render('index', { content });
  };
}
