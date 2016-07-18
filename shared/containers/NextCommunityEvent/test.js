import { mapStateToProps } from '.';
import deepFreeze from 'deep-freeze';

describe('NextCommunityEvent mapStateToProps', () => {
  const defaultValidProps = deepFreeze({
    talks: [],
  });

  it('has default values when there is no community', () => {
    const state = {};
    expect(mapStateToProps(state)).to.deep.equal(defaultValidProps);
  });

  it('has default values when there is no events', () => {
    const state = { community: {} };
    expect(mapStateToProps(state)).to.deep.equal(defaultValidProps);
  });

  it('has default values when events is empty', () => {
    const state = { community: { events: [] } };
    expect(mapStateToProps(state)).to.deep.equal(defaultValidProps);
  });

  it('event talks default to [] when the event has no event property', () => {
    const state = { community: { events: [{}] } };
    expect(mapStateToProps(state)).to.deep.equal(defaultValidProps);
  });
});
