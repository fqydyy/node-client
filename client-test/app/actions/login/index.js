import { CALL_API } from 'middlewares/api';
import { API, ACTIONS as A } from 'constant';

function authLogin(value, callback) {
  return {
    [CALL_API]: {
      method: 'POST',
      url: API.AUTH_LOGIN,
      types: [A.REQUEST_AUTH_LOGIN, A.RECEIVE_AUTH_LOGIN_SUCCESS, A.REQUEST_AUTH_LOGIN_ERROR],
      aftersuccess: callback,
      data: value
    }
  }
}

function checkAuth(AuthToken) {
  return {
    [CALL_API]:  {
      url: API.CHECK_AUTH,
      headers: {
        authorization: AuthToken
      },
      types: [A.REQUEST_CHECK_AUTH, A.RECEIVE_CHECK_AUTH_SUCCESS, A.REQUEST_CHECK_AUTH_ERROR]
    }
  }
}

export {
  authLogin,
  checkAuth
}
