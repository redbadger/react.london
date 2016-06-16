import { connect } from 'react-redux';
import Community from '../components/Community';

const mapStateToProps = (state) => {
  try {
    return { ...state.form.community.values };
  } catch (e) {
    return {};
  }
};

export default connect(mapStateToProps)(Community);
