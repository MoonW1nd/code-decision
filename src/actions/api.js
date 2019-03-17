// @flow
import type { Action } from 'redux';

export const FETCH_GIF_FULFILLED = 'FETCH_GIF_FULFILLED';

export const fetchGifFulfilled = (gifData: mixed): Action => ({ type: FETCH_GIF_FULFILLED, payload: gifData });
