import { connect } from 'react-redux';
import PreviewComponent from '../components/Preview/Preview.js';

const mapStateToProps = (state) => {
  try {
    return { ...state.form.editor.values };
  } catch (_error) {
    return {};
  }
};

export default connect(mapStateToProps, null)(PreviewComponent);
