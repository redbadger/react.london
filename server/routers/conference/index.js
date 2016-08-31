import { COMMUNITY_URL } from '../../constants';
import { getConferenceState } from '../../data';
import conferenceRoutes from '../../../shared/routes/conference-routes';
import conferenceData from '../../conference-data';
import useRouter from '../../use-router';

function router(req, res) {
  if (req.path === '/community') {
    return res.redirect(COMMUNITY_URL);
  }
  getConferenceState().then(state => {
    const initialState = conferenceData(state);
    const routes = conferenceRoutes(initialState);
    useRouter({ res, req, routes, initialState });
  })
  .catch(err => {
    // TODO Replace this with a user friendly error page
    res.status(500).json({ error: err.message });
  });
}

export default router;
