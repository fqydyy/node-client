import _ from 'lodash';
import { remote } from 'utils/fetch';

export const CALL_API = Symbol('CALL_API');

export default () => next => action => {
  const callAPI = action[CALL_API];

  // 按照普通的 Action 处理
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  // 做一些参数校验检测
  let { url, types, data, urlParam, method, hideError, success, error, args, aftersuccess} = callAPI;

  if (typeof url !== 'string') {
    throw new Error('Specify a string url.');
  }

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }

  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }
  const createNewAction = data => {
    let newAction = {
        ...action,
        ...data
    };
    delete newAction[CALL_API];
    return newAction;
  };

  let [requestType, successType, failureType] = types;

  next(createNewAction({
    type: requestType,
    args,
    request: data
  }));
  return remote({
    url,
    data,
    urlParam,
    hideError,
    method,
    aftersuccess
  }).then(
    r => {
      success && success(r)
      next(createNewAction({
        type: successType,
        payload: r.data,
        args,
        request: data
      }))
      if (_.isFunction(aftersuccess)) {
        aftersuccess(r.data);
      }
    }
  ).catch(
    e => {
      error && error(e)
      next(createNewAction({
        type: failureType,
        error: e,
        request: data
      }))
    }
  );
}