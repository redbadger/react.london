const getInitialValues = {
  loading: true
}

const initialValues = (state = getInitialValues, action) => {
  switch (action.type) {
    case 'FETCHING_CONTENT': {
      console.log('FETCHING_CONTENT');
      return {
        ...state,
        loading: true,
      }
    }
    case 'FETCH_CONTENT':
      console.log('FETCH_CONTENT');
      return { ...state };

    case 'FETCHED_CONTENT':
      console.log('FETCHED_CONTENT');
      return { 
        ...state,
        loading: false,
      };
    default:
      return state;
  };
};

export default initialValues;
