// @flow
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { getRandomGif } from '../api';
import { fetchGifFulfilled } from '../actions';

export function getRandomGifEpic(): Promise<*> {
  return from(getRandomGif()).pipe(
    map((response: mixed): mixed => fetchGifFulfilled(response.data)),
  );
}
