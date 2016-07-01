import deepFreeze from 'deep-freeze';
import reducer from '.';
import { updateEvent } from '../../actions/community_events';
import { siteStateLoaded } from '../../actions/persistence';
import { change as formFieldChange } from 'redux-form';
import { eventIDToFormName } from '../../names/event';

describe('events reducer', () => {
  it('has default state', () => {
    const state = reducer(undefined, {});
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
        eventIDToFormName('123'), 'title', 'New Important Title'
      );
      const state = reducer(prev, action);
      expect(state).to.deep.equal({
        123: { title: 'New Important Title' },
      });
    });

    it('inserts a value with an existing event', () => {
      const prev = deepFreeze({ 99: { color: 'yellow' } });
      const action = formFieldChange(
        eventIDToFormName('99'), 'size', 'really big'
      );
      const state = reducer(prev, action);
      expect(state).to.deep.equal({
        99: { color: 'yellow', size: 'really big' },
      });
    });

    it('overrites a value with an existing event and value', () => {
      const prev = deepFreeze({
        20: { about: 'not bad' },
      });
      const action = formFieldChange(
        eventIDToFormName('20'), 'about', 'Very good'
      );
      const state = reducer(prev, action);
      expect(state).to.deep.equal({
        20: { about: 'Very good' },
      });
    });

    it('discards actions from non-event forms', () => {
      const prev = deepFreeze({ 20: { name: 'Red' } });
      const action1 = formFieldChange('thing::1', 'title', 'Black');
      expect(reducer(prev, action1)).to.deep.equal(prev);
      const action2 = formFieldChange('conference', 'title', 'Yellow');
      expect(reducer(prev, action2)).to.deep.equal(prev);
      const action3 = formFieldChange('the-event::3', 'title', 'Blue');
      expect(reducer(prev, action3)).to.deep.equal(prev);
    });
  });
});
