import keyMirror from 'keymirror';

const ActionType = keyMirror({
  REQUEST_AUTH_LOGIN: null,
  RECEIVE_AUTH_LOGIN_SUCCESS: null,
  REQUEST_AUTH_LOGIN_ERROR: null,

  REQUEST_ACTIVITY_LIST: null,
  RECEIVE_ACTIVITY_LIST_SUCCESS: null,
  REQUEST_ACTIVITY_LIST_ERROR: null
});

export default ActionType;