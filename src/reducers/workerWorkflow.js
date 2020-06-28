const initialState = {
  workflow: {
    hasFamilyPage: false,
    currentWorkflowPage: null,
    state: null,
  },
  worker: {
    personalDetails: {
      firstName: '',
      middleName: '',
      lastName: '',
      dateOfBirth: '',
      gender: '',
      cellPhone: '',
      homePhone: '',
      primaryEmail: '',
      secondaryEmail: '',
      primaryContactType: '',
    },
    address: {
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      areaCode: '',
      country: '',
    },
    family: {
      familyName: '',
      relationshipType: '',
    },
    testimony: '',
  },
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_PERSONAL_DETAILS': {
      return {
        ...state,
        worker: {
          ...state.worker,
          personalDetails: {
            ...state.worker.personalDetails,
            ...action.payload,
          },
        },
      };
    }
    case 'ADD_FAMILY': {
      return {
        ...state,
        worker: {
          family: {
            ...state.worker.family,
            ...action.payload,
          },
        },
      };
    }
    case 'ADD_ADDRESS': {
      return {
        ...state,
        worker: {
          address: {
            ...state.worker.address,
            ...action.payload,
          },
        },
      };
    }
    case 'ADD_TESTIMONY': {
      return {
        ...state,
        worker: {
          ...state.worker,
          ...action.payload,
        },
      };
    }
    case 'SET_WORKFLOW_STATE': {
      return {
        ...state,
        workflow: {
          ...state.workflow,
          state: payload,
        },
      };
    }
    case 'SET_CURRENT_WORKFLOW_PAGE': {
      return {
        ...state,
        workflow: {
          ...state.workflow,
          currentWorkflowPage: payload,
        },
      };
    }
    case 'RESET_WORKER_WORKFLOW': {
      return initialState;
    }
    default:
      return state;
  }
};

export default reducer;
