import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppComponent from '../components/App/App';
import { callFetchContent } from '../actions';

const mapStateToProps = (state) => ({
  loading: state.initialValues.loading,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ callFetchContent }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
