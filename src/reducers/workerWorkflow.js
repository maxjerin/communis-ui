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
    },
    contact: {
      cellPhone: '',
      homePhone: '',
      primaryEmail: '',
      secondaryEmail: '',
      primaryContactType: '',
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
        personalDetails: {
          ...state.personalDetails,
          firstName: payload.firstName,
          middleName: payload.middleName,
          lastName: payload.lastName,
          dateOfBirth: payload.dateOfBirth,
          gender: payload.gender,
        },
      };
    }
    case 'ADD_CONTACT': {
      return {
        ...state,
        contact: {
          ...state.contact,
          cellPhone: payload.cellPhone,
          homePhone: payload.homePhone,
          primaryEmail: payload.primaryEmail,
          secondaryEmail: payload.secondaryEmail,
          primaryContactType: payload.primaryContactType,
        },
      };
    }
    case 'ADD_FAMILY': {
      return {
        ...state,
        family: {
          ...state.family,
          familyName: payload.familyName,
          relationshipType: payload.relationshipType,
        },
      };
    }
    case 'ADD_TESTIMONY': {
      return {
        ...state,
        testimony: payload.testimony,
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
