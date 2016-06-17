import { connect } from 'react-redux';
import Community from '../components/Community';

// TODO: test
// TODO: Inject the selected event
const mapStateToProps = (state) => {
  try {
    return { ...state.form.community.values };
  } catch (e) {
    return {};
  }
};

export default connect(mapStateToProps)(Community);
