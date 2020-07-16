const initialState = {
  workers: [],
  isError: false,
  exception: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_WORKERS_FULLFILLED': {
      return {
        ...state,
        isError: false,
        exception: null,
        workers: action.payload,
      };
    }
    case 'FETCH_WORKERS_REJECTED': {
      return {
        ...state,
        isError: true,
        exception: action.payload,
        workers: [],
      };
    }
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
