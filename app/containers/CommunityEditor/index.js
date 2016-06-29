import { connect } from 'react-redux';
import CommunityEditor from '../../components/CommunityEditor';

export const mapStateToProps = (state) => {
  let community;
  try {
    community = state.form.community.values;
  } catch (e) {
    community = {};
  }
  return { community };
};

export default connect(mapStateToProps)(CommunityEditor);
