const initialState = {
  regions: [],
  subRegions: {},
  tiers: [],
  isError: false,
  exception: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_REGIONS_FULFILLED': {
      return {
        ...state,
        isError: false,
        exception: null,
        regions: action.payload,
      };
    }
    case 'FETCH_REGIONS_REJECTED': {
      return {
        ...state,
        isError: true,
        exception: action.payload,
        regions: [],
      };
    }
    case 'FETCH_SUB_REGIONS_FULFILLED': {
      let subRegions = state.subRegions;
      subRegions[action.regionId] = action.payload;
      return {
        ...state,
        isError: false,
        exception: null,
        subRegions,
      };
    }
    case 'FETCH_SUB_REGIONS_REJECTED': {
      return {
        ...state,
        isError: true,
        exception: action.payload,
      };
    }
    case 'FETCH_REGIONS_TIERS_FULFILLED': {
      return {
        ...state,
        isError: false,
        exception: null,
        tiers: action.payload,
      };
    }
    case 'FETCH_REGIONS_TIERS_REJECTED': {
      return {
        ...state,
        isError: true,
        exception: action.payload,
        tiers: [],
      };
    }
    case 'CREATE_REGIONS_FULFILLED': {
      let regions = state.regions;
      regions.push(action.payload);
      return {
        ...state,
        isError: false,
        exception: null,
        regions: regions,
        newRegion: true,
      };
    }
    case 'CREATE_REGIONS_REJECTED': {
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
