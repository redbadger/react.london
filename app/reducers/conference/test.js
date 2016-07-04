import deepFreeze from 'deep-freeze';
import reducer from '.';
import { siteStateLoaded } from '../../actions/persistence';
import { change as formFieldChange } from 'redux-form';
import { CONFERENCE_FORM } from '../../names/form';

describe('events reducer', () => {
  it('has default state', () => {
    const prev = deepFreeze({});
    const state = reducer(undefined, prev);
    expect(state).to.deep.equal({});
  });

  describe('SITE_STATE_LOADED handling', () => {
    it('overwrites the state', () => {
      const prev = deepFreeze({ title: 'React London 5' });
      const conference = { title: 'Elm' };
      const action = siteStateLoaded({ conference });
      const state = reducer(prev, action);
      expect(state).to.deep.equal({ title: 'Elm' });
    });
  });

  describe('redux-form/CHANGE handling', () => {
    it('sets a value with a new value', () => {
      const prev = deepFreeze({ color: 'yellow' });
      const action = formFieldChange(
        CONFERENCE_FORM, 'title', 'New Important Title'
      );
      const state = reducer(prev, action);
      expect(state).to.deep.equal({
        color: 'yellow', title: 'New Important Title',
      });
    });

    it('inserts a value with an existing event', () => {
      const prev = deepFreeze({ color: 'yellow' });
      const action = formFieldChange(
        CONFERENCE_FORM, 'color', 'blue'
      );
      const state = reducer(prev, action);
      expect(state).to.deep.equal({ color: 'blue' });
    });

    it('does nothing for other forms', () => {
      const prev = deepFreeze({ color: 'yellow' });
      const action = formFieldChange(
        'language', 'color', 'blue'
      );
      const state = reducer(prev, action);
      expect(state).to.deep.equal({ color: 'yellow' });
    });
  });
});
