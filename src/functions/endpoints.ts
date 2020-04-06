enum Endpoints {
  Games = "/games",
  Languages = "/info/languages"
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
