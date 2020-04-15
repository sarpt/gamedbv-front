export function booleanMapToArray<T extends string>(booleanMap: { [k in T]: boolean }): T[] {
  const keys = Object.keys(booleanMap) as T[];

  return keys.filter(key => booleanMap[key]);
}
