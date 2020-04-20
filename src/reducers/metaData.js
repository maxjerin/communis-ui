const initialState = {
  metadataLoaded: false,
  countries: [],
  isError: false,
  exception: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_COUNTRIES_FULFILLED': {
      return {
        ...state,
        metadataLoaded: true,
        isError: false,
        exception: null,
        countries: action.payload,
      };
    }
    case 'FETCH_COUNTRIES_REJECTED': {
      return {
        ...state,
        isError: true,
        exception: action.payload,
        regions: [],
      };
    }
  }

  return state;
};

export default reducer;
