import { connect } from 'react-redux';
import {stateToHTML} from 'draft-js-export-html';
import {convertFromRaw} from 'draft-js';
import AboutComponent from '../components/About/About.js';

const convertFromRawToHTML = (content) => stateToHTML(convertFromRaw(content));

const mapStateToProps = (state) => ({
  text: 'values' in state.form.editor ? state.form.editor.values : '',
  summary: 'aboutSummary' in state.form.editor.values ? convertFromRawToHTML(state.form.editor.values.aboutSummary) : '',
});

export default connect(mapStateToProps, null)(AboutComponent);
