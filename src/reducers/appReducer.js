// @flow

import type { AppStateType } from '../types';

const initialState: AppStateType = {
  currentAnswer: '',
  currentGifUrl: '',
};

export function appReducer(state: AppStateType = initialState): AppStateType {
  return state;
}
