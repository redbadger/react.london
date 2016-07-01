import { connect } from 'react-redux';
import EditorHome from '../../components/EditorHome';
import { publishSiteState } from '../../actions/persistence';

export const mapStateToProps = (state) => {
  const eventIDs = Object.keys(state.events);
  return {
    events: state.events,
    community: state.community,
    conference: state.conference,
    eventIDs,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    publish: ({ events, community, conference }) => {
      return dispatch(publishSiteState({ events, community, conference }));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorHome);
