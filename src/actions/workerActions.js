import axios from 'axios';
import { GLOBAL_CONSTANT } from '../utils/constants';
import { getLocalToken } from './../utils/jwtTokenUtils';

export function createWorker(worker) {
  return function (dispatch) {
    axios({
      method: 'POST',
      url: GLOBAL_CONSTANT.ENDPOINTS.WORKER_PROFILE,
      data: worker,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Auth-Token': getLocalToken(),
      },
    })
      .then(response => {
        dispatch({
          type: 'CREATE_WORKER_FULFILLED',
          payload: response.data,
        });
      })
      .catch(err => {
        dispatch({
          type: 'CREATE_WORKER_REJECTED',
          payload: err.response.data,
        });
      });
  };
}
