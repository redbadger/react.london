import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addText } from '../actions';

import EditorComponent from '../components/Editor/Editor.js';

const mapStateToProps = (state) => ({
  userTexts: state,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ addText }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditorComponent);
