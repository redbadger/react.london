const userTexts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TEXT':
      console.log(action);
      return [
        ...state,
        action.userText,
      ];
    default:
      return state;
  }
};

export default userTexts;
