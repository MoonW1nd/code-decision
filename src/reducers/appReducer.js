// @flow

import type { StateType } from '../types';

const initialState: StateType = {
  currentAnswer: '',
  currentGifUrl: '',
};

export function appReducer(state: StateType = initialState): StateType {
  return state;
}
