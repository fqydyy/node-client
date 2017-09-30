import param from './param';
import {message} from 'antd';

/**
 * 模拟Promise 类
 *
 * 该类实现自动给传入的promise实例，调用then 方法时，主动加入了一个onReject参数 promise.then(onResolve, onReject)
 * 同时支持自定义传入catch方法 或者 onReject 函数
 * 可以解决不传入onReject函数，或导致JS报错的问题
 * 构造函数需要传入一个Promise实例作为，初始化条件
 */
class PromiseSimulator {
  constructor(promise) {
    if ( !promise ) throw new Error(`Promise instance required.`);
    this.promise = promise;
  }

  noop(e) {
    this.catchedError = e;
  }

  then(then, catchFn) {
    if (!catchFn) {
      catchFn = (e) => this.noop(e);
    }

    this.promise.then(then, catchFn);
    return this;
  }

  catch(catchFn) {
    this.promise.catch(catchFn);
    return this;
  }
}

function checkStatus(response) {
  if(response.status >= 200 && response.status < 300) {
    return response;
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

function remote(options) {
  let fetchOptions = {};

  options.method = options.method || 'GET';

  fetchOptions.headers = {
    'Accept': 'application/json, text/javascript, */*;',
    'Content-Type': 'application/json; charset=utf-8',
    'X-Requested-With': 'xmlhttprequest'
    // 'local': navigator.language || 'en-US'
  }
  fetchOptions.credentials = 'include';

  if(options.urlParam || options.method.toUpperCase() === 'GET') {
    let params = {};
    if (options.method.toUpperCase() === 'GET') {
      params = {
        t: new Date().getTime(),
        ...options.data,
        ...options.urlParam
      }
    } else {
      params = options.urlParam;
    }

    let concatStr = '?',
    queryStr = param(params);

    if(options.url.indexOf(concatStr) > -1) {
      concatStr = '&'
    }

    if(queryStr) {
      options.url += (concatStr + queryStr);
    }
  } else {
    fetchOptions.body = JSON.stringify(options.data);
  }
  fetchOptions.method = options.method;

  let t = fetch(options.url, fetchOptions)
    .then(checkStatus)
    .then(res => res.json())
    .then(json => {
      if ( json.status === 'FAILED' ) {
        let msg = json.errorData && json.errorData.message ? json.errorData.message : '网络繁忙，请稍后重试.'
        throw new Error(msg);
        }

        if(json.info && json.info[0] && json.info[0].name === "LOGIN_REDIRECT_URL") {
          let redirectUrl = json.info[0].msg;
          window.location.href = redirectUrl;
          throw new Error('NOT_LOGIN');
        }
        if(json.code !== 0) {
          throw new ServerError(json)
        } else {
          return json || {};
        }
    })
    .catch(
      e => {
        if ( e && e.response && e.response.status === 403 ) {
          window.location.hash = '#/forbidden';
        } else {
          !options.hideError && message.error(e.message, 5);
        }
        return Promise.reject(e);
      }
    );
  return new PromiseSimulator(t);
}

function ServerError(res) {
  this.name = 'ServerError';
  this.message = res.message || '系统出了点小问题，请稍后重试.';
  this.res = res;
  this.stack = (new Error()).stack;
}

export {
    remote
};