// @flow
import type Action from 'redux';
import { FETCH_GIF_FULFILLED } from '../actions';
import type { ApiStateType } from '../types';

const initialState: ApiStateType = {
  data: null,
  status: 'pending',
};

export function apiReducer(state: ApiStateType = initialState, action: Action): ApiStateType {
  switch (action.type) {
    case FETCH_GIF_FULFILLED: {
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
