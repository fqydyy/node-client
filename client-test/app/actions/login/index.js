import { CALL_API } from 'middlewares/api';
import { API, ACTIONS as A } from 'constant';

export default function authLogin(value, callback) {
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