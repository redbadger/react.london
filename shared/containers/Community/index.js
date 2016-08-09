import { connect } from 'react-redux';
import Community from '../../components/Community';

export const mapStateToProps = (state) => {
  if (!state || !state.community) { return {}; }
  const {
    title,
    summary,
    mailingListTitle,
    mailingListSummary,
    events,
  } = state.community;
  return {
    title,
    summary,
    mailingListTitle,
    mailingListSummary,
    featuredEvent: events.find(e => e.displayLevel === 'Featured') || {},
  };
};

export default connect(mapStateToProps)(Community);
