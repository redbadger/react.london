import { connect } from 'react-redux';
import EditorHome from '../../components/EditorHome';

export const mapStateToProps = (state) => {
  const eventIDs = Object.keys(state.events);
  return { eventIDs };
};

export default connect(mapStateToProps)(EditorHome);
