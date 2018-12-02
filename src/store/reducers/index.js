import { combineReducers } from 'redux';
import threadsReducer from './threads/threadsReducer';
import activeThreadIdReducer from './threads/activeThreadIdReducer';

const rootReducer = combineReducers({
  activeThreadId: activeThreadIdReducer,
  threads: threadsReducer
});

export default rootReducer;