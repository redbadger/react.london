export function buildFormChangeHandler(formName) {
  return (state, action) => {
    if (action.meta.form === formName) {
      return {
        ...state,
        [action.meta.field]: action.payload,
      };
    }
    return state;
  };
}
