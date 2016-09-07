import { COMMUNITY_URL } from '../../constants';
import React from 'react';
import { getConferenceState } from '../../data';
import conferenceRoutes from '../../../shared/routes/conference-routes';
import { renderToString } from 'react-dom/server';
import conferenceData from '../../conference-data';
import useRouter from '../../use-router';
import ErrorPage500 from '../../../shared/components/ErrorPage500';

function router(req, res) {
  if (req.path === '/community') {
    return res.redirect(COMMUNITY_URL);
  }
  getConferenceState().then(state => {
    const initialState = conferenceData(state);
    const routes = conferenceRoutes(initialState);
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
