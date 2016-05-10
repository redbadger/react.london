import { connect } from 'react-redux';
import {stateToHTML} from 'draft-js-export-html';
import {convertFromRaw} from 'draft-js';
import PreviewComponent from '../components/Preview/Preview.js';
import readyToRender from '../utilities/readyToRender.js';

const mapStateToProps = (state) => ({
  text: readyToRender(state.form.editor),
});

export default connect(mapStateToProps, null)(PreviewComponent);
