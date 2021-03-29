import { from, Observable } from "rxjs";
import { map, mergeMap } from "rxjs/operators";
import { getGifByQuery } from "../api";
import { Actions, fetchGifFulfilled, FETCH_GIF } from "../actions";
import type { ResponseType, StateType } from "../types";
import { ofType } from "redux-observable";

type EpicStateType = {
  value: StateType;
};

export function getGifByQueryEpic(
  action$: Observable<Actions>,
  state: EpicStateType
) {
  return action$.pipe(
    ofType(FETCH_GIF),
    mergeMap(() => from(getGifByQuery(state.value.app.currentAnswer))),
    map((response: ResponseType) => fetchGifFulfilled(response.data))
  );
}

export function initialGetGifByQueryEpic(
  action$: Observable<Actions>,
  state: EpicStateType
) {
  return from(getGifByQuery(state.value.app.currentAnswer)).pipe(
    map((response: ResponseType) => fetchGifFulfilled(response.data))
  );
}
