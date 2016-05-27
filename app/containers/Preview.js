import { connect } from 'react-redux';
import PreviewComponent from '../components/Preview/Preview.js';

const mapStateToProps = (state) => ({
  text: { ...state.form.editor.values }
});

export default connect(mapStateToProps, null)(PreviewComponent);
