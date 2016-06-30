import { mapStateToProps } from '.';
import { eventIDToFormName } from '../../names/event';

describe('EventEditor mapStateToProps', () => {
  const state = {
    events: {
      foo: {
        eventTitle: 'foo title',
        eventSummary: 'foo summary',
      },
    },
    community: {
      communityTitle: 'community title!',
    },
    form: {
      [eventIDToFormName('foo')]: {
        values: {
          eventTitle: 'form title data',
        },
      },
    },
  };

  it('gets event and community details if event if known', () => {
    const props = { params: { eventID: 'foo' } };
    expect(mapStateToProps(state, props)).to.deep.equal({
      eventID: 'foo',
      initialFormValues: {
        eventTitle: 'foo title',
        eventSummary: 'foo summary',
      },
      eventPreviewProps: {
        communityTitle: 'community title!',
        eventTitle: 'form title data',
      },
    });
  });

  it('returns object with ID if event not in state', () => {
    const props = { params: { eventID: 'bar' } };
    expect(mapStateToProps(state, props)).to.deep.equal({
      eventID: 'bar',
      initialFormValues: {},
      eventPreviewProps: {
        communityTitle: 'community title!',
      },
    });
  });
});
