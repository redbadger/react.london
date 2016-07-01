import reducer from '.';
import { change as formFieldChange } from 'redux-form';
import { publishSiteSuccess, siteStateLoaded } from '../../actions/persistence';

describe('events reducer', () => {
  it('has default state', () => {
    const state = reducer(undefined, {});
    expect(state).to.deep.equal(false);
  });


  describe('redux-form/CHANGE handling', () => {
    it('registers changes as unsaved', () => {
      const prev = false;
      const action = formFieldChange(
        'community', 'communityTitle', 'New Important Title'
      );
      const state = reducer(prev, action);
      expect(state).to.equal(true);
    });
  });

  describe('PUBLISH_SITE_SUCCESS handling', () => {
    it('registers all changes as saved', () => {
      const prev = true;
      const action = publishSiteSuccess();
      const state = reducer(prev, action);
      expect(state).to.equal(false);
    });
  });

  describe('SITE_STATE_LOADED handling', () => {
    it('registers all changes as saved', () => {
      const prev = true;
      const action = siteStateLoaded({});
      const state = reducer(prev, action);
      expect(state).to.equal(false);
    });
  });
});
