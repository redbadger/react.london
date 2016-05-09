import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateRichText } from '../actions';

import RichFieldComponent from '../components/Editor/RichField/RichField.js';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({ updateRichText }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RichFieldComponent);
