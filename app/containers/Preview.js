import { connect } from 'react-redux';

import PreviewComponent from '../components/Preview/Preview.js';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    userTexts: state.userTexts,
  };
};

export default connect(mapStateToProps, null)(PreviewComponent);
