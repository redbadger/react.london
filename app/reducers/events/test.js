import deepFreeze from 'deep-freeze';
import reducer from '.';
import { updateEvent, setEvents } from '../../actions/community_events';
import { stateLoaded } from '../../actions/persistence';

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

  describe('SET_EVENTS handling', () => {
    it('adds the event when the ID is new', () => {
      const prev = deepFreeze({ 5: { title: 'React London 5' } });
      const action = setEvents({
        3: { title: 'React Thing' },
        8: { title: 'Redux Thing' },
      });
      const state = reducer(prev, action);
      expect(state).to.deep.equal({
        3: { title: 'React Thing' },
        8: { title: 'Redux Thing' },
      });
    });
  });

  describe('STATE_LOADED handling', () => {
    it('adds the event when the ID is new', () => {
      const prev = deepFreeze({ 5: { title: 'React London 5' } });
      const events = {
        3: { title: 'React Thing' },
        8: { title: 'Redux Thing' },
      };
      const action = stateLoaded({ events });
      const state = reducer(prev, action);
      expect(state).to.deep.equal({
        3: { title: 'React Thing' },
        8: { title: 'Redux Thing' },
      });
    });
  });
});
