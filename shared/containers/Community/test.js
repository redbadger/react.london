import { mapStateToProps } from '.';

describe('Community mapStateToProps', () => {
  const state = {
    community: {
      summary: 'community summary!',
    },
  };

  it('gets community values', () => {
    expect(mapStateToProps(state)).to.deep.equal({
      summary: 'community summary!',
      shhhhhhhh: {
        flip: 'Gur orfg jnl gb',
        open: ' yrnea vf ol qbvat',
        xoyo: ' vg jebat. - Qna Noenzbi',
      },
    });
  });

  it('defaults if no values', () => {
    expect(mapStateToProps({})).to.deep.equal({
      shhhhhhhh: {
        flip: 'Gur orfg jnl gb',
        open: ' yrnea vf ol qbvat',
        xoyo: ' vg jebat. - Qna Noenzbi',
      },
    });
  });
});
