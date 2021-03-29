import { from, Observable } from "rxjs";
import { map, mergeMap } from "rxjs/operators";
import { Action } from "redux";
import { getGifByQuery } from "../api";
import { fetchGifFulfilled, FETCH_GIF } from "../actions";
import type { ResponseType, StateType } from "../types";

type EpicStateType = {
  value: StateType;
};

export function getGifByQueryEpic(
  action$: Action,
  state: EpicStateType
): Observable {
  return action$.ofType(FETCH_GIF).pipe(
    mergeMap(() => from(getGifByQuery(state.value.app.currentAnswer))),
    map((response: ResponseType) => fetchGifFulfilled(response.data))
  );
}

export function initialGetGifByQueryEpic(
  action$: Action,
  state: EpicStateType
): Observable {
  return from(getGifByQuery(state.value.app.currentAnswer)).pipe(
    map((response: ResponseType) => fetchGifFulfilled(response.data))
  );
}
