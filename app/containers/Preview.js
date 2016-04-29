import { connect } from 'react-redux';

import PreviewComponent from '../components/Preview/Preview.js';

const mapStateToProps = (state) => ({
  userTexts: state,
});

export default connect(mapStateToProps, null)(PreviewComponent);
