// @flow
import { QUERY } from '../constants';
import { getRandomInt } from '.';

export const getRandomQuery = () => {
  const queryKeys = Object.keys(QUERY);
  const maxIndex = queryKeys.length - 1;
  const index = getRandomInt(0, maxIndex);
  const key = queryKeys[index];

  return QUERY[key];
};
