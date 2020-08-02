import axios from 'axios';
import { GLOBAL_CONSTANT } from '../utils/constants';
import { getLocalToken } from './../utils/jwtTokenUtils';

export function fetchRegionTiers() {
  return function (dispatch) {
    axios({
      method: 'get',
      url: GLOBAL_CONSTANT.ENDPOINTS.MISSION_REGION_TIERS,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Auth-Token': getLocalToken(),
      },
    })
      .then(response => {
        dispatch({
          type: 'FETCH_REGIONS_TIERS_FULFILLED',
          payload: response.data.data,
        });
      })
      .catch(err => {
        dispatch({
          type: 'HTTP_ERROR',
          payload: err.response.data,
        });
      });
  };
}

export function fetchOrganizations() {
  return function (dispatch) {
    axios({
      method: 'get',
      url: GLOBAL_CONSTANT.ENDPOINTS.MISSION_ORGANIZATION,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Auth-Token': getLocalToken(),
      },
    })
      .then(response => {
        dispatch({
          type: 'FETCH_ORGANIZATION_FULFILLED',
          payload: response.data.data,
        });
      })
      .catch(err => {
        dispatch({
          type: 'HTTP_ERROR',
          payload: err.response.data,
        });
      });
  };
}

export function createOrganization(organization) {
  return function (dispatch) {
    axios({
      method: 'put',
      url: GLOBAL_CONSTANT.ENDPOINTS.MISSION_ORGANIZATION,
      data: organization,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Auth-Token': getLocalToken(),
      },
    })
      .then(response => {
        dispatch({
          type: 'CREATE_ORGANIZATION_FULFILLED',
          payload: response.data.data,
        });
      })
      .catch(err => {
        dispatch({
          type: 'HTTP_ERROR',
          payload: err.response.data,
        });
      });
  };
}

export function updateOrganization(organization) {
  return function (dispatch) {
    axios({
      method: 'post',
      url: GLOBAL_CONSTANT.ENDPOINTS.MISSION_ORGANIZATION,
      data: organization,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Auth-Token': getLocalToken(),
      },
    })
      .then(response => {
        dispatch({
          type: 'UPDATE_ORGANIZATION_FULFILLED',
          payload: response.data.data,
        });
      })
      .catch(err => {
        dispatch({
          type: 'HTTP_ERROR',
          payload: err.response.data,
        });
      });
  };
}

export function fetchRegions() {
  return function (dispatch) {
    axios({
      method: 'get',
      url: GLOBAL_CONSTANT.ENDPOINTS.MISSION_REGION,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Auth-Token': getLocalToken(),
      },
    })
      .then(response => {
        dispatch({
          type: 'FETCH_REGIONS_FULFILLED',
          payload: response.data.data,
        });
      })
      .catch(err => {
        dispatch({
          type: 'HTTP_ERROR',
          payload: err.response.data,
        });
      });
  };
}

export function fetchSubRegions(regionId) {
  return function (dispatch) {
    axios({
      method: 'get',
      url: GLOBAL_CONSTANT.ENDPOINTS.MISSION_SUB_REGION.replace(
        '$regionId',
        regionId,
      ),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Auth-Token': getLocalToken(),
      },
    })
      .then(response => {
        dispatch({
          type: 'FETCH_SUB_REGIONS_FULFILLED',
          payload: response.data.data,
          regionId: regionId,
        });
      })
      .catch(err => {
        dispatch({
          type: 'HTTP_ERROR',
          payload: err.response.data,
        });
      });
  };
}

export function createRegion(region) {
  return function (dispatch) {
    axios({
      method: 'put',
      url: GLOBAL_CONSTANT.ENDPOINTS.MISSION_REGION,
      data: region,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Auth-Token': getLocalToken(),
      },
    })
      .then(response => {
        dispatch({
          type: 'CREATE_REGIONS_FULFILLED',
          payload: response.data.data,
        });
      })
      .catch(err => {
        dispatch({
          type: 'HTTP_ERROR',
          payload: err.response.data,
        });
      });
  };
}

export function createSubRegion(region) {
  return function (dispatch) {
    axios({
      method: 'put',
      url:
        GLOBAL_CONSTANT.ENDPOINTS.MISSION_REGION +
        '/' +
        region.parentRegion +
        '/subRegion',
      data: region,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Auth-Token': getLocalToken(),
      },
    })
      .then(response => {
        dispatch({
          type: 'CREATE_SUBREGIONS_FULFILLED',
          payload: response.data.data,
        });
      })
      .catch(err => {
        dispatch({
          type: 'HTTP_ERROR',
          payload: err.response.data,
        });
      });
  };
}

export function updateRegion(region) {
  return function (dispatch) {
    axios({
      method: 'post',
      url: GLOBAL_CONSTANT.ENDPOINTS.MISSION_REGION,
      data: region,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Auth-Token': getLocalToken(),
      },
    })
      .then(response => {
        dispatch({
          type: 'UPDATE_REGIONS_FULFILLED',
          payload: response.data.data,
        });
      })
      .catch(err => {
        dispatch({
          type: 'HTTP_ERROR',
          payload: err.response.data,
        });
      });
  };
}
