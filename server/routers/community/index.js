import { CONFERENCE_URL } from '../../constants';
import { getCommunityState } from '../../data';
import communityRoutes from '../../../shared/routes/community-routes';
import communityData from '../../community-data';
import useRouter from '../../use-router';
import CommunityLayout from '../../../shared/components/CommunityLayout';
import makeErrorHandler from '../handle-error';

function router(req, res) {
  if (req.path === '/conference') {
    return res.redirect(CONFERENCE_URL);
  }
  getCommunityState()
    .then(state => {
      const initialState = communityData(state);
      const routes = communityRoutes(initialState);
      useRouter({ res, req, routes, initialState });
    })
    .catch(makeErrorHandler(res, CommunityLayout));
}

export default router;
