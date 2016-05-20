const initialValues = (state = { loading: true }, action) => {
  switch (action.type) {
    case 'GET_CONTENT_REQUESTED':
      console.log('GET_CONTENT_REQUESTED');
      return { ...state };

    case 'GETTING_CONTENT':
      console.log('GETTING_CONTENT');
      return {
        ...state,
        loading: true,
      };

    case 'GET_CONTENT_SUCCESS':
      console.log('GET_CONTENT_SUCCESS');
      return {
        ...state,
        loading: false,
      };

    case 'SAVE_CONTENT_REQUESTED':
      console.log('SAVE_CONTENT_REQUESTED');
      return { ...state };

    case 'SAVING_CONTENT':
      console.log('SAVING_CONTENT');
      return { ...state };

    case 'SAVE_CONTENT_SUCCESS':
      console.log('SAVE_CONTENT_SUCCESS');
      return { ...state };

    case 'API_ERROR':
      console.error(action.message);

    default:
      return state;
  };
};

export default initialValues;
