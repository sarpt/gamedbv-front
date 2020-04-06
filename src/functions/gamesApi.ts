import { ajax } from 'rxjs/ajax';

import { Platforms } from '../models/Platforms';
import { Regions } from '../models/Regions';
import { ApiParameters } from '../models/ApiParameters'
import { GamesResult } from '../models/GamesResult';
import { GameInfo } from '../models/GameInfo';

import { addQueriesToUrl } from './urlUtils';
import { getGamesEndpoint, getGameDetailsEndpoint } from './endpoints';

type SearchGamesArguments = {
  searchQuery: string,
  shouldFilterByText: boolean,
  page: number,
  gamesPerPage: number,
  regions: Regions[],
  platforms: Platforms[]
};

export function searchGames({
  searchQuery,
  shouldFilterByText,
  page,
  gamesPerPage,
  regions,
  platforms
}: SearchGamesArguments) {
  let url = getGamesEndpoint();
  if (shouldFilterByText) {
    url = addQueriesToUrl(url, ApiParameters.searchQuery, [searchQuery]);
  }
  url = addQueriesToUrl(url, ApiParameters.currentPage, [page]);
  url = addQueriesToUrl(url, ApiParameters.itemsPerPage, [gamesPerPage]);
  url = addQueriesToUrl(url, ApiParameters.platform, platforms);
  url = addQueriesToUrl(url, ApiParameters.region, regions);

  const options: RequestInit = {
    method: 'GET'
  };

  return ajax.getJSON<GamesResult>(url, options);
}

type GetGameArguments = {
  id: string
};

export function getGame({ id }: GetGameArguments) {
  const url = getGameDetailsEndpoint(id);
  const options: RequestInit = {
    method: 'GET'
  };

  return ajax.getJSON<GameInfo>(url, options);
}