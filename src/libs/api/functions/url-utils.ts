export function addQueriesToUrl(initialUrl: URL, name: string, values: string[]): URL {
  const url = new URL(initialUrl.href);

  values.forEach(value => url.searchParams.append(name, value));

  return url;
}
