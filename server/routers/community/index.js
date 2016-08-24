import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext } from 'react-router';
import communityRoutes from '../../../shared/routes/community-routes';
import { getCommunityState } from '../../data';
import { CONFERENCE_URL } from '../../constants';
import { useRoutes } from '../../routes';
import communityData from '../../community-data';


function router(req, res) {
  if (req.path === '/conference') {
    res.redirect(CONFERENCE_URL);
  } else {
    getCommunityState().then(state => {
      const initialState = communityData(state);
      const routes = communityRoutes(initialState);
      const location = req.url;
      useRoutes(res, routes, location, (_res, renderProps) => {
        const content = renderToString(
          <RouterContext {...renderProps} />
        );
        res.render('index', { content, initialState });
      });
    })
    .catch((err) => {
      // TODO Replace this with a user friendly error page
      res.status(500).json({ error: err.message });
    });
  }
}

export default router;
