import { connect } from 'react-redux';
import NextCommunityEvent from '../../components/NextCommunityEvent';

export const mapStateToProps = (state) => {
  return state.community.events[0] || {};
};

export default connect(mapStateToProps)(NextCommunityEvent);
