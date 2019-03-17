// @flow
import type Action from 'redux';
import { FETCH_GIF_FULFILLED } from '../actions';

export type ApiStateType = {
  data: mixed[],
  status: string
};

const initialState: ApiStateType = {
  data: [],
  status: 'pending',
};

export function apiReducer(state: ApiStateType = initialState, action: Action): ApiStateType {
  switch (action.type) {
    case FETCH_GIF_FULFILLED: {
      return {
        ...state,
        status: 'done',
        data: action.payload,
      };
    }

    default:
      return state;
  }
}
