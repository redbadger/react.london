import { connect } from 'react-redux';
import pathOr from 'ramda/src/pathOr';
import TicketStatus from '../../components/TicketStatus';
import { getTicketStatusOptions } from '../../components/TestLogicXX';

const defaultProps = {
  talks: [],
};

export const mapStateToProps = (state) => {
  const featuredEvent = pathOr(defaultProps, ['community', 'featuredEvent'], state);
  const props = getTicketStatusOptions(featuredEvent);

  return {
    ...defaultProps,
    ...props,
  };
};

export default connect(mapStateToProps)(TicketStatus);
