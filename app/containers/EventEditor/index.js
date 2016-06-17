import { connect } from 'react-redux';
import EventEditor from '../../components/EventEditor';

export const mapStateToProps = (state, { params: { eventID } }) => {
  const event = state.events[eventID] || {};
  return {
    event: { ...event, eventID },
  };
};

export default connect(mapStateToProps)(EventEditor);
