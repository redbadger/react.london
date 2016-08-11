import { connect } from 'react-redux';
import Community from '../../components/Community';

export const mapStateToProps = (state) => {
  if (!state || !state.community) return {};
  const {
    title,
    summary,
    mailingListTitle,
    mailingListSummary,
    events,
  } = state.community;
  return {
    whatdoesthe___say: {
      flip: 'Gur orfg jnl gb',
      open: ' yrnea vf ol qbvat',
      xoyo: ' vg jebat. - Qna Noenzbi',
    },
    bite: {
      alias: 'Yvfc vfa\'g n ynathntr,',
      noop: ' vg\'f n ohvyqvat zngrevny.',
      tail: ' - Nyna Xnl',
    },
    other: {
      moo: {
        category: 'Ižql xóq , nxb xrol gra ',
        ouch: ', xgb fxbačí hqežnť iáš xóq ohqr aáfvyaý cflpubcng ,',
        watch: ' xgbeý ivr, xqr žvwrgr . - Evpx Bfobear',
      },
    },
    title,
    summary,
    mailingListTitle,
    mailingListSummary,
    featuredEvent: events.find(e => e.displayLevel === 'Featured') || {},
  };
};

export default connect(mapStateToProps)(Community);
