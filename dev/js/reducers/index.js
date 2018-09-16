import {combineReducers} from 'redux';
import UserReducer from'./reducer-users';

// this will combine all reducers into one javascript file for Store to save.
const allReducers = combineReducers({
    users:UserReducer
});

export default allReducers;