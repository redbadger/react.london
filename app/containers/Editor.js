import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EditorComponent from '../components/Editor/Editor.js';
import { callPutContent } from '../actions';

const mapStateToProps = (state) => ({
  content: state
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ callPutContent }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditorComponent);
