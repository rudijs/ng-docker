import { combineReducers } from 'redux';
import counter from './counter';

const rootReducer: Redux.Reducer = combineReducers({
  counter: counter
});

export default rootReducer;
