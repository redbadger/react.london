import { connect } from 'react-redux';
import NextCommunityEvent from '../../components/NextCommunityEvent';
import pathOr from 'ramda/src/pathOr';

const defaultProps = {
  talks: [],
};

export const mapStateToProps = (state) => {
  const props = pathOr(defaultProps, ['community', 'events', 0], state);
  return {
    ...defaultProps,
    ...props,
  };
};

export default connect(mapStateToProps)(NextCommunityEvent);
