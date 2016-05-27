import { connect } from 'react-redux';
import PreviewComponent from '../components/Preview/Preview.js';

const getEditorContent = (state) => {
  if (state && state.form && state.form.editor && state.form.editor.values) {
    return { ...state.form.editor.values };
  }

  return {};
};

const mapStateToProps = (state) => {
  return {
    text: getEditorContent(state),
  };
};

export default connect(mapStateToProps, null)(PreviewComponent);
