import { mapStateToProps, mapDispatchToProps } from '.';
import { publishSiteState } from '../../actions/persistence';

describe('EditorHome container mapStateToProps', () => {
  const state = {
    events: {
      44: { eventTitle: 'Forty Four' },
      83: { eventTitle: 'Eighty Three' },
    },
    conference: {
      conferenceTitle: 'conf 1',
    },
    community: {
      communityTitle: 'React London',
    },
  };

  it('pulls out event keys', () => {
    const { eventIDs } = mapStateToProps(state);
    expect(eventIDs.sort()).to.deep.equal(['44', '83']);
  });

  it('sets events', () => {
    const { events } = mapStateToProps(state);
    expect(events).to.deep.equal(state.events);
  });

  it('sets events', () => {
    const { conference } = mapStateToProps(state);
    expect(conference).to.deep.equal(state.conference);
  });

  it('sets community', () => {
    const { community } = mapStateToProps(state);
    expect(community).to.deep.equal(state.community);
  });
});


describe('EditorHome container mapDispatchToProps', () => {
  const dispatch = x => x;

  const events = {
    44: { eventTitle: 'Forty Four' },
    83: { eventTitle: 'Eighty Three' },
  };
  const conference = {
    conferenceTitle: 'conf 1',
  };
  const community = {
    communityTitle: 'React London',
  };

  it('creates a publish action dispatcher', () => {
    const { publish } = mapDispatchToProps(dispatch);
    const action = publish({ events, conference, community });
    expect(action).to.deep.equal(
      publishSiteState({ events, conference, community })
    );
  });
});
