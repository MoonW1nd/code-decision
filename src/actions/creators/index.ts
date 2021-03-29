import { ResponseDataType } from "../../types";
import {
  FETCH_GIF,
  FETCH_GIF_FAIL,
  FETCH_GIF_FULFILLED,
  FETCH_RANDOM_GIF,
  FETCH_RANDOM_GIF_FAIL,
  FETCH_RANDOM_GIF_FULFILLED,
} from "../types";

export const fetchGif = () => ({ type: FETCH_GIF } as const);
export const fetchGifFulfilled = (gifData: ResponseDataType[]) =>
  ({
    type: FETCH_GIF_FULFILLED,
    payload: gifData,
  } as const);
export const fetchGifFail = () => ({ type: FETCH_GIF_FAIL } as const);

export const fetchRandomGif = () => ({ type: FETCH_RANDOM_GIF } as const);
export const fetchRandomGifFulfilled = (gifData: ResponseDataType) =>
  ({
    type: FETCH_RANDOM_GIF_FULFILLED,
    payload: gifData,
  } as const);
export const fetchRandomGifFail = () =>
  ({ type: FETCH_RANDOM_GIF_FAIL } as const);

export type Actions =
  | ReturnType<typeof fetchGif>
  | ReturnType<typeof fetchGifFail>
  | ReturnType<typeof fetchGifFulfilled>
  | ReturnType<typeof fetchRandomGif>
  | ReturnType<typeof fetchRandomGifFail>
  | ReturnType<typeof fetchRandomGifFulfilled>;
