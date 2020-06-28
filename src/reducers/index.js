import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authentication from './authentication';
import mission from './mission';
import worker from './worker';
import workerWorkflow from './workerWorkflow';
import metaData from './metaData';

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    metaData,
    authentication,
    mission,
    worker,
    workerWorkflow,
  });

export default rootReducer;
