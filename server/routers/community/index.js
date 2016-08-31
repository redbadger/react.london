import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { CONFERENCE_URL } from '../../constants';
import { getCommunityState } from '../../data';
import communityRoutes from '../../../shared/routes/community-routes';
import communityData from '../../community-data';

function router(req, res) {
  if (req.path === '/conference') {
    res.redirect(CONFERENCE_URL);
  } else {
    getCommunityState().then(state => {
      const initialState = communityData(state);
      const routes = communityRoutes(initialState);
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
