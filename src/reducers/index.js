import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authentication from './authentication';
import mission from './mission';
import metaData from './metaData';
import error from './error';

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    metaData,
    authentication,
    mission,
    error,
  });

export default rootReducer;
