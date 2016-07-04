import { connect } from 'react-redux';
import Community from '../../components/Community';

export const mapStateToProps = (state) => {
  return state.community || {};
};

export default connect(mapStateToProps)(Community);
