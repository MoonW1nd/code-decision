import type { ResponseOriginalDataType } from "./apiResponse";

export type ApiStateType = {
  data: ResponseOriginalDataType | null;
  status: string;
};
