import deepFreeze from 'deep-freeze';
import reducer from '.';
import updateEvent from '../../actions/community_events';

describe('events reducer', () => {
  it('has default state', () => {
    const prev = deepFreeze({});
    const state = reducer(undefined, prev);
    expect(state).to.deep.equal({});
  });

  describe('UPDATE_EVENT handling', () => {
    it('adds the event when the ID is new', () => {
      const prev = deepFreeze({ 5: { title: 'React London 5' } });
      const action = updateEvent('123', { title: 'Magic Event' });
      const state = reducer(prev, action);
      expect(state).to.deep.equal({
        5: {
          title: 'React London 5',
        },
        123: {
          title: 'Magic Event',
        },
      });
    });

    it('overrites the event when the ID exists', () => {
      const prev = deepFreeze({ 5: { title: 'React London 5' } });
      const action = updateEvent(5, { summary: 'Very rad' });
      const state = reducer(prev, action);
      expect(state).to.deep.equal({
        5: {
          summary: 'Very rad',
        },
      });
    });
  });
});
