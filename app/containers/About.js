import { connect } from 'react-redux';
import {stateToHTML} from 'draft-js-export-html';

import AboutComponent from '../components/About/About.js';

const mapStateToProps = (state) => ({
  text: state.form.editor && state.form.editor.values ? state.form.editor.values : '',
  aboutSummary: stateToHTML(state.aboutSummary),
});

export default connect(mapStateToProps, null)(AboutComponent);
