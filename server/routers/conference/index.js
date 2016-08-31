import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { COMMUNITY_URL } from '../../constants';
import { getConferenceState } from '../../data';
import conferenceRoutes from '../../../shared/routes/conference-routes';
import conferenceData from '../../conference-data';

function router(req, res) {
  if (req.path === '/community') {
    res.redirect(COMMUNITY_URL);
  } else {
    getConferenceState().then(state => {
      const initialState = conferenceData(state);
      const routes = conferenceRoutes(initialState);
      const location = req.url;
      match({ routes, location }, (error, redirect, renderProps) => {
        if (error) {
          return res.status(500).send(error.message);
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
    })
    .catch(err => {
      // TODO Replace this with a user friendly error page
      res.status(500).json({ error: err.message });
    });
  }
}

export default router;
