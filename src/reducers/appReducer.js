// @flow
import type Action from 'redux';
import { FETCH_GIF_FULFILLED, FETCH_RANDOM_GIF_FULFILLED } from '../actions';
import type { AppStateType } from '../types';
import { getRandomInt, getRandomQuery } from '../utils';

const initialState: AppStateType = {
  currentAnswer: getRandomQuery(),
  currentGifUrl: '',
};

export function appReducer(state: AppStateType = initialState, action: Action): AppStateType {
  switch (action.type) {
    case FETCH_GIF_FULFILLED: {
      const index = getRandomInt(0, action.payload.length - 1);
      return {
        ...state,
        currentGifUrl: action.payload[index].images.original.url,
      };
    }

    case FETCH_RANDOM_GIF_FULFILLED: {
      return {
        ...state,
        currentGifUrl: action.payload.images.original.gif_url,
      };
    }

    default:
      return state;
  }
}
