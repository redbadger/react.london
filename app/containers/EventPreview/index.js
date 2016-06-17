import { connect } from 'react-redux';
import Community from '../../components/Community';

export const mapStateToProps = (state) => {
  let event;
  try {
    event = { ...state.form.event.values };
  } catch (e) {
    event = {};
  }
  const community = state.community;
  return {
    ...community,
    ...event,
  };
};

export default connect(mapStateToProps)(Community);
