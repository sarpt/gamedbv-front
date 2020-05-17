enum Endpoints {
  Games = '/games',
  Languages = '/info/languages',
  Regions = '/info/regions',
  Platforms = '/info/platforms',
}

const server = 'http://localhost:3001';

function createServerURL(pathname: string): URL {
  const url = new URL(server);
  url.pathname = pathname;

  return url;
}

export function getGamesEndpoint(): URL {
  return createServerURL(Endpoints.Games);
}

export function getLanguagesEndpoint(): URL {
  return createServerURL(Endpoints.Languages);
}

export function getRegionsEndpoint(): URL {
  return createServerURL(Endpoints.Regions);
}

export function getPlatformsEndpoint(): URL {
  return createServerURL(Endpoints.Platforms);
}

export function getGameDetailsEndpoint(id: string): URL {
  const url = getGamesEndpoint();
  url.pathname = `${url.pathname}/${id}`;

  return url;
}
