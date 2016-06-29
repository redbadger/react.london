import { connect } from 'react-redux';
import CommunityEditor from '../../components/CommunityEditor';

export const mapStateToProps = (state) => {
  const initialFormValues = state.community;
  let communityProps;
  try {
    communityProps = state.form.community.values;
  } catch (e) {
    communityProps = {};
  }
  return { communityProps, initialFormValues };
};

export default connect(mapStateToProps)(CommunityEditor);
