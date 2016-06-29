import { connect } from 'react-redux';
import EventEditor from '../../components/EventEditor';

export const mapStateToProps = (state, { params: { eventID } }) => {
  const community = state.community;
  const initialFormValues = state.events[eventID] || {};
  let eventProps;
  try {
    eventProps = state.form[`event::${eventID}`].values;
  } catch (e) {
    eventProps = {};
  }
  const eventPreviewProps = { ...community, ...eventProps };
  return { eventID, eventPreviewProps, initialFormValues };
};

export default connect(mapStateToProps)(EventEditor);
