
import { ACTIONS } from 'constant';
import { createReducer } from 'utils/createReducer';

const initialState = {
};
export default createReducer(initialState, {
  [ACTIONS.RECEIVE_AUTH_LOGIN_SUCCESS]: (state,payload) => {
    return {
      ...state,
      ...payload
    }
  },
  [ACTIONS.REQUEST_AUTH_LOGIN_ERROR]: () => {
    return {};
  },
  [ACTIONS.RECEIVE_CHECK_AUTH_SUCCESS]: (state,payload) => {
    return {
      ...state,
      ...payload
    }
  }

});