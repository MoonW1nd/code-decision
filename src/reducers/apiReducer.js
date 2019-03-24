// @flow
import type Action from 'redux';
import { FETCH_GIF_FULFILLED, FETCH_RANDOM_GIF_FULFILLED } from '../actions';
import type { ApiStateType } from '../types';
import { getRandomInt } from '../utils';

const initialState: ApiStateType = {
  data: null,
  status: 'pending',
};

export function apiReducer(state: ApiStateType = initialState, action: Action): ApiStateType {
  switch (action.type) {
    case FETCH_GIF_FULFILLED: {
      const index = getRandomInt(0, action.payload.length - 1);
      return {
        ...state,
        status: 'done',
        data: action.payload[index].images.original,
      };
    }

    case FETCH_RANDOM_GIF_FULFILLED: {
      return {
        ...state,
        status: 'done',
        data: action.payload.images.original,
      };
    }

    default:
      return state;
  }
}
