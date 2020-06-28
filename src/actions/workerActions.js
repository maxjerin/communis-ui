import axios from 'axios';
import {
  GLOBAL_CONSTANT,
  WORKER_WITH_FAMILY_WORKFLOW_STATES,
  WORKER_WORKFLOW_STATES,
} from '../utils/constants';
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
