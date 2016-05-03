import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateText } from '../actions';

import EditorComponent from '../components/Editor/Editor.js';

const mapStateToProps = (state) => ({
  ...state.userTexts,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ updateText }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditorComponent);
