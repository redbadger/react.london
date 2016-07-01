export default function buildBeforeUnload(store) {
  return () => {
    if (store.getState().unsavedChanges) return true;
  };
}
