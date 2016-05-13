import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EditorComponent from '../components/Editor/Editor.js';
import { callFetchContent } from '../actions';

const mapStateToProps = (state) => ({
  initialValues: state.initialValues,
  content: state,
  loading: state.initialValues.loading,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ callFetchContent }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditorComponent);
