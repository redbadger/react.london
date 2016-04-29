const getInitialState = () => ({
  aboutTitle: 'London React User Group',
  aboutSummary: 'This group was established by Red Badger, a software company at Old Street.\nReact is already having a huge impact on the way we think about Web UI development at Red Badger and this is an opportunity to learn why and share your own experiences. \nWe meet once a month, usually on the 3rd Wednesday of each month \nWe generally have 2 or 3 speakers and loads of questions, pizzas and beer.\nWe are a sociable group and very welcoming to newcomers. Follow us on Twitter @Londonreact and join the conversation on Slack here\nSee you soon!',
});

const userTexts = (state = getInitialState(), action) => {
  switch (action.type) {
    case 'UPDATE_TEXT':
      const newState = { ...state };
      newState[action.key] = action.value;
      return newState;
    default:
      return state;
  }
};

export default userTexts;
