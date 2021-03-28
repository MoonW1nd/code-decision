// @flow
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Action } from 'redux';
import { getRandomGif } from '../api';
import { fetchRandomGifFulfilled } from '../actions';
import type { ResponseType } from '../types';

export function getRandomGifEpic(): Observable {
  return from(getRandomGif()).pipe(
    map((response: ResponseType): Action => fetchRandomGifFulfilled(response.data)),
  );
}
