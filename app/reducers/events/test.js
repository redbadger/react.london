import deepFreeze from 'deep-freeze';
import reducer from '.';
import { updateEvent } from '../../actions/community_events';
import { siteStateLoaded } from '../../actions/persistence';
import { change as formFieldChange } from 'redux-form';

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

  describe('SITE_STATE_LOADED handling', () => {
    it('overwrites the state', () => {
      const prev = deepFreeze({ 5: { title: 'React London 5' } });
      const events = {
        3: { title: 'React Thing' },
        8: { title: 'Redux Thing' },
      };
      const action = siteStateLoaded({ events });
      const state = reducer(prev, action);
      expect(state).to.deep.equal({
        3: { title: 'React Thing' },
        8: { title: 'Redux Thing' },
      });
    });
  });


  describe('redux-form/CHANGE handling', () => {
    it('sets a value with a new event', () => {
      const prev = deepFreeze({});
      const action = formFieldChange(
        'form::123', 'title', 'New Important Title'
      );
      const state = reducer(prev, action);
      expect(state).to.deep.equal({
        123: { title: 'New Important Title' },
      });
    });

    it('inserts a value with an existing event', () => {
      const prev = deepFreeze({ 99: { color: 'yellow' } });
      const action = formFieldChange(
        'form::99', 'size', 'really big'
      );
      const state = reducer(prev, action);
      expect(state).to.deep.equal({
        99: { color: 'yellow', size: 'really big' },
      });
    });


    it('overrites a value with an existing event and value', () => {
      const prev = deepFreeze({
        20: { about: 'Not bad' },
      });
      const action = formFieldChange(
        'form::20', 'about', 'Very good'
      );
      const state = reducer(prev, action);
      expect(state).to.deep.equal({
        20: { about: 'Very good' },
      });
    });
  });
});
