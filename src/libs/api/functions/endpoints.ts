enum Endpoints {
  Games = '/games',
  Languages = '/info/languages',
  Regions = '/info/regions',
  Platforms = '/info/platforms',
  Updates = '/updates',
}

const port = '3001';

function createRestServerURL(pathname: string): URL {
  const hostname = `${window.location.hostname}:${port}`;
  const url = new URL(`http://${hostname}`);
  url.pathname = pathname;

  return url;
}

function createWebsocketServerURL(pathname: string): URL {
  const host = `${window.location.hostname}:${port}`;
  const url = new URL(`ws://${host}`);
  url.pathname = pathname;

  return url;
}

export function getGamesEndpoint(): URL {
  return createRestServerURL(Endpoints.Games);
}

export function getLanguagesEndpoint(): URL {
  return createRestServerURL(Endpoints.Languages);
}

export function getRegionsEndpoint(): URL {
  return createRestServerURL(Endpoints.Regions);
}

export function getPlatformsEndpoint(): URL {
  return createRestServerURL(Endpoints.Platforms);
}

export function getUpdatesEndpoint(): URL {
  return createWebsocketServerURL(Endpoints.Updates);
}

export function getGameDetailsEndpoint(id: string): URL {
  const url = getGamesEndpoint();
  url.pathname = `${url.pathname}/${id}`;

  return url;
}
