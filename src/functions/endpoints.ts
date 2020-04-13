enum Endpoints {
  Games = "/games",
  Languages = "/info/languages",
  Regions = "/info/regions",
}

const server = 'http://localhost:3001';

export function getGamesEndpoint(): string {
  return `${server}${Endpoints.Games}`;
}

export function getGameDetailsEndpoint(id: string): string {
  return `${getGamesEndpoint()}/${id}`;
}

export function getLanguagesEndpoint(): string {
  return `${server}${Endpoints.Languages}`;
}

export function getRegionsEndpoint(): string {
  return `${server}${Endpoints.Regions}`;
}
