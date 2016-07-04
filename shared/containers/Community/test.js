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
    });
  });

  it('defaults if no values', () => {
    expect(mapStateToProps({})).to.deep.equal({});
  });
});
