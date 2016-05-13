import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EditorComponent from '../components/Editor/Editor.js';

const mapStateToProps = (state) => ({
  initialValues: state.initialValues,
  content: state,
});

export default connect(mapStateToProps)(EditorComponent);
