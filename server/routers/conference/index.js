import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext } from 'react-router';
import conferenceRoutes from '../../../shared/routes/conference-routes';
import { COMMUNITY_URL } from '../../constants';
import { useRoutes } from '../../routes';
import { getConferenceState } from '../../data';
import conferenceData from '../../conference-data';

function router(req, res) {
  if (req.path === '/community') {
    res.redirect(COMMUNITY_URL);
  } else {
    getConferenceState().then(state => {
      const initialState = conferenceData(state);
      const routes = conferenceRoutes(initialState);
      const location = req.url;
      useRoutes(res, routes, location, (_res, renderProps) => {
        const content = renderToString(
          <RouterContext {...renderProps} />
        );
        return res.render('index', { content, initialState });
      });
    });
  }
}

export default router;
