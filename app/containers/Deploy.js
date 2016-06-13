import { connect } from 'react-redux';
import DeployComponent from '../components/Deploy/Deploy.js';
import { deployContent } from '../api';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({
  content: state,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ deployContent }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DeployComponent);
