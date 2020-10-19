import { combineReducers } from 'redux';
import sitesReducer from './sitesReducer';


export default combineReducers({
    sites: sitesReducer,
});
