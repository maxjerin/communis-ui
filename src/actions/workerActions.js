import axios from 'axios';
import {
  GLOBAL_CONSTANT,
  WORKER_WITH_FAMILY_WORKFLOW_STATES,
  WORKER_WORKFLOW_STATES,
} from '../utils/constants';
import { getLocalToken } from './../utils/jwtTokenUtils';
import {
  deserializeWorker,
  serializeWorker,
} from '../transformers/workerTransfomer';

export function fetchWorkers() {
  return function (dispatch) {
    axios({
      method: 'get',
      url: GLOBAL_CONSTANT.ENDPOINTS.WORKERS,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Auth-Token': getLocalToken(),
      },
    })
      .then(response => {
        dispatch({
          type: 'FETCH_WORKERS_FULLFILLED',
          payload: response.data.data,
        });
      })
      .catch(err => {
        dispatch({
          type: 'FETCH_WORKERS_REJECTED',
          payload: err.response.data,
        });
      });
  };
}

export function addWorker(worker) {
  return function (dispatch) {
    axios({
      method: 'POST',
      url: GLOBAL_CONSTANT.ENDPOINTS.WORKER_PROFILE,
      data: serializeWorker(worker),
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
        dispatch({
          type: 'RESET_WORKER_WORKFLOW',
        });
      })
      .catch(err => {
        dispatch({
          type: 'CREATE_WORKER_REJECTED',
          payload: err.response.data,
        });
        dispatch({
          type: 'RESET_WORKER_WORKFLOW',
        });
      });
  };
}

export function setWorkflowState(hasFamilyPage) {
  const states = hasFamilyPage
    ? WORKER_WITH_FAMILY_WORKFLOW_STATES
    : WORKER_WORKFLOW_STATES;
  return {
    type: 'SET_WORKFLOW_STATE',
    payload: states,
  };
}

export function setCurrentWorkflowPage(workerWorkflowPage) {
  return {
    type: 'SET_CURRENT_WORKFLOW_PAGE',
    payload: workerWorkflowPage,
  };
}

export function resetWorkerWorkflow() {
  return {
    type: 'RESET_WORKER_WORKFLOW',
  };
}

export function addPersonalDetails(personalDetails) {
  return {
    type: 'ADD_PERSONAL_DETAILS',
    payload: personalDetails,
  };
}

export function addAddress(address) {
  return {
    type: 'ADD_ADDRESS',
    payload: address,
  };
}

export function addFamily(family) {
  return {
    type: 'ADD_FAMILY',
    payload: family,
  };
}

export function addTestimony(testimony) {
  return {
    type: 'ADD_TESTIMONY',
    payload: testimony,
  };
}

export function selectWorker(worker) {
  return dispatch => {
    dispatch({
      type: 'SELECT_WORKER',
      payload: deserializeWorker(worker),
    });
  };
}
