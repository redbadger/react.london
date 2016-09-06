import { CONFERENCE_URL } from '../../constants';
import { getCommunityState } from '../../data';
import communityRoutes from '../../../shared/routes/community-routes';
import communityData from '../../community-data';
import useRouter from '../../use-router';

function router(req, res) {
  if (req.path === '/conference') {
    return res.redirect(CONFERENCE_URL);
  }
  getCommunityState().then(state => {
    const initialState = communityData(state);
    const routes = communityRoutes(initialState);
    useRouter({ res, req, routes, initialState });
  })
  .catch(err => {
    // TODO Replace this with a user friendly error page
    res.status(500).json({ error: err.message });
  });
}

export default router;
