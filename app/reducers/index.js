const userTexts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TEXT':
      return [
        ...state,
        {
          value: action.userText,
          id: action.id,
        }
      ];
    default:
      return state;
  }
};

export default userTexts;
