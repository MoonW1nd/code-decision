// @flow
import type Action from 'redux';
import { FETCH_GIF_FULFILLED } from '../actions';
import type { ResponseDataType } from '../types';

export type ApiStateType = {
  data: ResponseDataType,
  status: string
};

const initialState: ApiStateType = {
  data: {},
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
