import { connect } from 'react-redux';
import PreviewComponent from '../components/Preview/Preview.js';
import readyToRender from '../utilities/readyToRender.js';

const getEditorContent = (state) => {
  if (state && state.form && state.form.editor && state.form.editor.values) {
    return { ...state.form.editor.values };
  }

  return {};
};

const mapStateToProps = (state) => {
  console.log('Preview container', getEditorContent(state));
  return {
    text: getEditorContent(state),
  };
};

export default connect(mapStateToProps, null)(PreviewComponent);
