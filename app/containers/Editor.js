import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateText } from '../actions';

import EditorComponent from '../components/Editor/Editor.js';

const mapStateToProps = (state) => ({
  initialValues: state.initialValues,
  content: state,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ updateText }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditorComponent);
