export function arrayWithout<T>(arr: T[], predicate: (elem: T) => boolean): T[] {
  const idx = arr.findIndex(predicate);
  if (idx === -1) return [ ...arr ];

  return [
    ...arr.slice(0, idx),
    ...arr.slice(idx + 1, arr.length),
  ];
}
