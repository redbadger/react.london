import { CONFERENCE_URL } from '../../constants';
import CommunityLayout from '../../../shared/components/CommunityLayout';
import communityData from '../../community-data';
import communityRoutes from '../../../shared/routes/community-routes';
import { getCommunityState } from '../../data';
import makeErrorHandler from '../handle-error';
import useRouter from '../../use-router';

function router(req, res) {
  if (req.path === '/conference') {
    return res.redirect(CONFERENCE_URL);
  }
  getCommunityState()
    .then((state) => {
      const initialState = communityData(state);
      const routes = communityRoutes(initialState);
      useRouter({ res, req, routes, initialState });
    })
    .catch(makeErrorHandler(res, CommunityLayout));
}

export default router;
