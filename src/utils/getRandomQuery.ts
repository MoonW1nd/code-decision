import { QUERY, QueryType } from "../constants";
import { getRandomInt } from ".";

type QueryKeys = keyof typeof QUERY;

export const getRandomQuery = (): QueryType => {
  const queryKeys = Object.keys(QUERY) as QueryKeys[];
  const maxIndex = queryKeys.length - 1;
  const index = getRandomInt(0, maxIndex);
  const key = queryKeys[index];

  return QUERY[key];
};
