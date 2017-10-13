import { combineReducers } from 'redux';
import login from './login';
import list from './activity/list'
export default combineReducers({
  authInfo: login,
  activity: combineReducers({
    list
  })
});