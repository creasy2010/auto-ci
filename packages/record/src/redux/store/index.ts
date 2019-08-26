import {applyMiddleware, createStore, compose, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

//@ts-ignore
const composeEnhancers =__DEV__ &&
  typeof window === 'object' &&
  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ?
    window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;




const middlewares = [
  thunkMiddleware
]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(require('redux-logger').createLogger())
}

const middlewareEnhancer = applyMiddleware(...middlewares);
const composedEnhancers = composeEnhancers(middlewareEnhancer);

let GolbalStore = createStore(
  combineReducers(rootReducer),
  undefined,
  composedEnhancers,
);

//动态注册reducer
export function registerReducer(reducerMap: {[name: string]: Function}) {
  //判断是否重复.
  for (let key in reducerMap) {
    if (rootReducer[key]) {
      throw new Error(
        `the register reducer conflict with reducer name: ${key},please modify the reducer name`,
      );
    }
  }

  GolbalStore.replaceReducer(
    combineReducers({
      ...rootReducer,
      ...reducerMap,
    }),
  );
}

/**
 *
 * @param reducerKey
 * @returns {T}
 */
export function getReducerData<T>(reducerKey: string): T {
  return GolbalStore.getState()[reducerKey] as any;
}

export default GolbalStore;
