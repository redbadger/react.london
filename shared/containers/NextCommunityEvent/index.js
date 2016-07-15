import { connect } from 'react-redux';
import NextCommunityEvent from '../../components/NextCommunityEvent';
import { pathOr } from 'ramda';

export const mapStateToProps = (state) => {
  return pathOr('', ['community', 'events', 0], state);
};

export default connect(mapStateToProps)(NextCommunityEvent);
