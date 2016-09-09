import ErrorPage500 from '../../shared/components/ErrorPage500';
import { renderToString } from 'react-dom/server';
import React from 'react';
import logger from '../logger';

export default function makeErrorHandler(res, Layout) {
  return (error) => {
    logger.error(error);
    const content = renderToString(
      <Layout>
        <ErrorPage500 />
      </Layout>
    );
    res.status(500).render('index', { content });
  };
}
