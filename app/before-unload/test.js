import buildBeforeUnload from '.';

describe('buildBeforeUnload', () => {
  it('warns if called with unsaved changes', () => {
    const state = { unsavedChanges: true };
    const store = { getState: () => state };
    const cb = buildBeforeUnload(store);
    expect(cb()).to.equal(true);
  });

  it('does nothing called with no unsaved changes', () => {
    const state = { unsavedChanges: false };
    const store = { getState: () => state };
    const cb = buildBeforeUnload(store);
    expect(cb()).to.equal(undefined);
  });
});
