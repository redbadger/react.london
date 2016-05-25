import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppComponent from '../components/App/App';

const mapStateToProps = (state) => ({
  loading: state.initialValues.loading
});

export default connect(mapStateToProps)(AppComponent);
