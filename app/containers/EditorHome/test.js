import { mapStateToProps } from '.';

describe('EditorHome container mapStateToProps', () => {
  const state = {
    events: {
      44: { eventTitle: 'Forty Four' },
      83: { eventTitle: 'Eighty Three' },
    },
  };

  it('pulls out event keys', () => {
    const { eventIDs } = mapStateToProps(state);
    expect(eventIDs.sort()).to.deep.equal(['44', '83']);
  });
});
