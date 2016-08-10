import { connect } from 'react-redux';
import Community from '../../components/Community';

export const mapStateToProps = (state) => {
  return {
    ...state.community,
    shhhhhhhh: {
      flip: 'Gur orfg jnl gb',
      open: ' yrnea vf ol qbvat',
      xoyo: ' vg jebat. - Qna Noenzbi',
    },
  } || {};
};

export default connect(mapStateToProps)(Community);
