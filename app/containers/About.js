import { connect } from 'react-redux';

import AboutComponent from '../components/About/About.js';

const mapStateToProps = (state) => ({
  ...state.userTexts,
});

export default connect(mapStateToProps, null)(AboutComponent);
