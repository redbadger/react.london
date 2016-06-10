import { connect } from 'react-redux';
import EditorComponent from '../components/Editor/Editor.js';

const mapStateToProps = (state) => ({
  content: state,
});

export default connect(mapStateToProps)(EditorComponent);
