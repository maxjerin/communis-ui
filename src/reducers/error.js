const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HTTP_ERROR': {
      return {
        isError: true,
        exception: action.payload,
      };
    }
  }

  return state;
};

export default reducer;
