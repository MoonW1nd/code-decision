import { from, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Action } from "redux";
import { getRandomGif } from "../api";
import { Actions, fetchRandomGifFulfilled } from "../actions";
import type { RandomResponseType } from "../types";

export function getRandomGifEpic(): Observable<Actions> {
  return from(getRandomGif()).pipe(
    map(
      (response: RandomResponseType): Action =>
        fetchRandomGifFulfilled(response.data)
    )
  );
}
