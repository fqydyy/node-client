
import { ACTIONS } from 'constant';
import { createReducer } from 'utils/createReducer';

const initialState = [];
export default createReducer(initialState, {
  [ACTIONS.RECEIVE_ACTIVITY_LIST_SUCCESS]: (state,payload) => {
    return payload;
  },
  [ACTIONS.REQUEST_ACTIVITY_LIST_ERROR]: () => {
    return {};
  }
});