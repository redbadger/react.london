import { connect } from 'react-redux';
import Community from '../../components/Community';

export const mapStateToProps = (state) => {
  console.log(state);
  if (!state || !state.community) { return {}; }
  console.log('EHY!!!!');
  const {
    title,
    summary,
    mailingListTitle,
    mailingListSummary,
    events,
  } = state.community;
  return {
    shhhhhhhh: {
      flip: 'Gur orfg jnl gb',
      open: ' yrnea vf ol qbvat',
      xoyo: ' vg jebat. - Qna Noenzbi',
    },
    title,
    summary,
    mailingListTitle,
    mailingListSummary,
    featuredEvent: events.find(e => e.displayLevel === 'Featured') || {},
  };
};

export default connect(mapStateToProps)(Community);
