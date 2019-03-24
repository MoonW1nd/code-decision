// @flow
import type { Action } from 'redux';

export const FETCH_GIF = 'FETCH_GIF';
export const FETCH_GIF_FULFILLED = 'FETCH_GIF_FULFILLED';
export const FETCH_GIF_FAIL = 'FETCH_GIF_FAIL';

export const FETCH_RANDOM_GIF = 'FETCH_RANDOM_GIF';
export const FETCH_RANDOM_GIF_FULFILLED = 'FETCH_RANDOM_GIF_FULFILLED';
export const FETCH_RANDOM_GIF_FAIL = 'FETCH_RANDOM_GIF_FAIL';

export const fetchGif = () => ({ type: FETCH_GIF });
export const fetchGifFulfilled = (gifData: mixed): Action => ({ type: FETCH_GIF_FULFILLED, payload: gifData });
export const fetchGifFail = () => ({ type: FETCH_GIF_FAIL });

export const fetchRandomGif = () => ({ type: FETCH_RANDOM_GIF });
export const fetchRandomGifFulfilled = (gifData: mixed): Action => ({
  type: FETCH_RANDOM_GIF_FULFILLED, payload: gifData,
});
export const fetchRandomGifFail = () => ({ type: FETCH_RANDOM_GIF_FAIL });
