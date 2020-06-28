const initialState = {
  workers: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_WORKER_FULFILLED': {
      let workers = state.workers;
      workers.push(action.payload);
      return {
        ...state,
        isError: false,
        exception: null,
        workers: workers,
      };
    }
    case 'CREATE_WORKER_REJECTED': {
      return {
        ...state,
        isError: true,
        exception: action.payload,
      };
    }
    default:
  }

  return state;
};

export default reducer;
