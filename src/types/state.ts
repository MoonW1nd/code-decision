import type { AppStateType } from "./appState";
import type { ApiStateType } from "./apiState";

export type StateType = {
  app: AppStateType;
  api: ApiStateType;
};
