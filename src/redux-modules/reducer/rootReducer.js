import { combineReducers } from 'redux';
import siteReducer from './SiteReducer';
import groupReducer from './GroupReducer';

export default combineReducers({
    siteReducer,
    groupReducer
});
