export const QUERY = {
  refactoring: "code refactoring",
  fixBug: "fix bug",
  writeTest: "write test",
  clearDependency: "clear dependency",
  code: "time to code",
} as const;

export type QueryType = typeof QUERY[keyof typeof QUERY];
