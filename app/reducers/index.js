const initialValues = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_CONTENT':
      console.log('FETCH_CONTENT');
      return { ...state };

    case 'FETCHED_CONTENT':
      console.log('FETCHED_CONTENT ', action.payload);
      return { ...action.payload };
    default:
      return state;
  };
};

export default initialValues;
