import keyMirror from 'keymirror';

const ActionType = keyMirror({
  REQUEST_AUTH_LOGIN: null,
  RECEIVE_AUTH_LOGIN_SUCCESS: null,
  REQUEST_AUTH_LOGIN_ERROR: null
});

export default ActionType;