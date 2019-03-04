// @flow

import type { StateType } from '../types';

const initialState: StateType = {
  currentAnswer: '',
  currentGifUrl: '',
};


export default function mainReducer(state: StateType = initialState): StateType {
  return state;
}
