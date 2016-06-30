import { connect } from 'react-redux';
import EventEditor from '../../components/EventEditor';
import { eventIDToFormName } from '../../names/event';

export const mapStateToProps = (state, { params: { eventID } }) => {
  const community = state.community;
  const initialFormValues = state.events[eventID] || {};
  let eventProps;
  try {
    const formName = eventIDToFormName(eventID);
    eventProps = state.form[formName].values;
  } catch (e) {
    eventProps = {};
  }
  const eventPreviewProps = { ...community, ...eventProps };
  return { eventID, eventPreviewProps, initialFormValues };
};

export default connect(mapStateToProps)(EventEditor);
