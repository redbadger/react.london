import { mapStateToProps } from '.';

describe('EventEditor mapStateToProps', () => {
  const state = {
    events: {
      foo: {
        title: 'foo title',
        summary: 'foo summary',
      },
    },
  };

  it('gets event and adds eventID', () => {
    const props = {
      params: {
        eventID: 'foo',
      },
    };
    expect(mapStateToProps(state, props)).to.deep.equal({
      event: {
        eventID: 'foo',
        title: 'foo title',
        summary: 'foo summary',
      },
    });
  });

  it('returns object with ID if event not in state', () => {
    const props = {
      params: {
        eventID: 'bar',
      },
    };
    expect(mapStateToProps(state, props)).to.deep.equal({
      event: {
        eventID: 'bar',
      },
    });
  });
});
