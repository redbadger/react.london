import { connect } from 'react-redux';

import AboutComponent from '../components/About/About.js';

const mapStateToProps = (state) => ({
  text: state.form.editor && state.form.editor.values ? state.form.editor.values : '',
});

export default connect(mapStateToProps, null)(AboutComponent);
