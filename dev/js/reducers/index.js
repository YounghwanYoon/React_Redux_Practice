import {combineReducers} from 'redux';
import UserReducer from'./reducer-users';
import ActiveUserReducer from './reducer-active-user';

// this will combine all reducers into one javascript file for Store to save.
const allReducers = combineReducers({
    users:UserReducer, 
    activeUser:ActiveUserReducer
});

export default allReducers;