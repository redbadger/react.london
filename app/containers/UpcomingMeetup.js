import { connect } from 'react-redux';

import UpcomingMeetupComponent from '../components/UpcomingMeetup/UpcomingMeetup.js';

const mapStateToProps = (state) => ({
  text: state.form.editor && state.form.editor.values ? state.form.editor.values : '',
});

export default connect(mapStateToProps, null)(UpcomingMeetupComponent);
