import { createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import callAPI from 'middlewares/api';

const loggerMiddleware = createLogger();
export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      callAPI,
      thunkMiddleware,
      loggerMiddleware
    )
  );
  return store;
}