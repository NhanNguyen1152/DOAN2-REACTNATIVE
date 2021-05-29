import { combineReducers } from 'redux';
import taskReducer from './fetchreducer';

const allReducers = combineReducers({
  taskReducer,
});

export default allReducers;