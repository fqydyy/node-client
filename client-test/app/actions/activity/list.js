import { CALL_API } from 'middlewares/api';
import { API, ACTIONS as A } from 'constant';

export default function activitylist(callback) {
  return {
    [CALL_API]: {
      method: 'GET',
      url: API.ACTIVITY_LIST,
      types: [A.REQUEST_ACTIVITY_LIST, A.RECEIVE_ACTIVITY_LIST_SUCCESS, A.REQUEST_ACTIVITY_LIST_ERROR],
      aftersuccess: callback,
      data: {}
    }
  }
}

