import { connect } from 'react-redux';
import Community from '../../components/Community';

function featuredEvent(events) {
  return events.find(e => e.displayLevel === 'Featured') || {};
}

function futureEvents(events) {
  return events.filter(e => e.displayLevel === 'Highlighted').slice(0, 3);
}

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
    featuredEvent: featuredEvent(events),
    futureEvents: futureEvents(events),
  };
};

export default connect(mapStateToProps)(Community);
