import { connect } from 'react-redux';
import PreviewComponent from '../components/Preview/Preview.js';

const mapStateToProps = (state) => {
  try {
    return { ...state.form.editor.values };
  } catch (_) {
    return {};
  }
};

export default connect(mapStateToProps, null)(PreviewComponent);
