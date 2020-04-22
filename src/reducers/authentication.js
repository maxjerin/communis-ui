const initialState = {
  token: null,
  isError: false,
  responseCode: 200,
  exception: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGOUT': {
      return initialState;
    }
    case 'AUTHENTICATE_USER_FULFILLED': {
      return {
        ...state,
        isError: false,
        token: action.payload,
        responseCode: 200,
        exception: [],
      };
    }
    case 'AUTHENTICATE_USER_REJECTED': {
      let exceptions = null;
      if (action.payload.errors) {
        exceptions = action.payload.errors.map(error => error.defaultMessage);
      } else {
        exceptions = [action.payload.message];
      }

      return {
        ...state,
        isError: true,
        responseCode: action.payload.status,
        exception: exceptions,
      };
    }
  }

  return state;
};

export default reducer;
