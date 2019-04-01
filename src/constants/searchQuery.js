// @flow
export const QUERY = {
  refactoring: 'refactoring',
  writeTest: 'write test',
  clearDependency: 'clear dependency',
  code: 'time to code',
};

export type QueryType = $Values<typeof QUERY>;
