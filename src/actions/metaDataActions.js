import axios from 'axios';
import { GLOBAL_CONSTANT } from '../utils/constants';
import { getLocalToken } from './../utils/jwtTokenUtils';

export function fetchMetaData() {
  return function (dispatch) {
    dispatch(fetchCountries());
  };
}

export function fetchCountries() {
  return function (dispatch) {
    axios({
      method: 'get',
      url: GLOBAL_CONSTANT.ENDPOINTS.COUNTRIES,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Auth-Token': getLocalToken(),
      },
    })
      .then(response => {
        dispatch({
          type: 'FETCH_COUNTRIES_FULFILLED',
          payload: response.data.data,
        });
      })
      .catch(err => {
        dispatch({
          type: 'FETCH_COUNTRIES_REJECTED',
          payload: err.response.data,
        });
      });
  };
}
