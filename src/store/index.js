// @flow
/* eslint-disable no-underscore-dangle */
import {
  createStore, combineReducers, type Store, applyMiddleware, compose,
} from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { appReducer, apiReducer } from '../reducers';
import { getRandomGifEpic } from '../epics';
import type { StateType } from '../types';


export function configureStore(): Store<StateType> {
  const rootEpic = combineEpics(getRandomGifEpic);

  const epicMiddleware = createEpicMiddleware();

  const rootReducer = combineReducers({
    app: appReducer,
    api: apiReducer,
  });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)));

  epicMiddleware.run(rootEpic);

  return store;
}

export default configureStore();
