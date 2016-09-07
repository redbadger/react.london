import { CONFERENCE_URL } from '../../constants';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { getCommunityState } from '../../data';
import communityRoutes from '../../../shared/routes/community-routes';
import communityData from '../../community-data';
import useRouter from '../../use-router';
import ErrorPage500 from '../../../shared/components/ErrorPage500';

function router(req, res) {
  if (req.path === '/conference') {
    return res.redirect(CONFERENCE_URL);
  }
  getCommunityState().then(state => {
    const initialState = communityData(state);
    const routes = communityRoutes(initialState);
    useRouter({ res, req, routes, initialState });
  })
    .catch(() => {
      const content = renderToString(
        <ErrorPage500 />
      );
      res.render('index', { content });
    });
}

export default router;
