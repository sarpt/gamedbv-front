const startingQueryParametersSymbol = '?';
const nextQueryParameterSymbol = '&';

function getQuerySeparator(url: string) {
  return url.includes(startingQueryParametersSymbol) ? nextQueryParameterSymbol : startingQueryParametersSymbol;
}

export function addQueriesToUrl(initialUrl: string, queryName: string, queryValues: any[]) {
  return queryValues.reduce((finalUrl: string, queryValue: string) => {
    const separator = getQuerySeparator(finalUrl);

    return `${finalUrl}${separator}${queryName}=${queryValue}`;
  }, initialUrl);
}