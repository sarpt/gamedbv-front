import { ajax } from 'rxjs/ajax';

import { ApiParameters } from '../models/api-parameters';
import { GamesResult } from '../../common/models/games-result';
import { GameInfo } from '../../common/models/game-info';

import { addQueriesToUrl } from './url-utils';
import { getGamesEndpoint, getGameDetailsEndpoint } from './endpoints';

type SearchGamesArguments = {
  searchQuery: string,
  shouldFilterByText: boolean,
  page: number,
  gamesPerPage: number,
  regions: string[],
  platforms: string[],
};

export function searchGames({
  searchQuery,
  shouldFilterByText,
  page,
  gamesPerPage,
  regions,
  platforms,
}: SearchGamesArguments) {
  let url = getGamesEndpoint();
  if (shouldFilterByText) {
    url = addQueriesToUrl(url, ApiParameters.searchQuery, [searchQuery]);
  }
  url = addQueriesToUrl(url, ApiParameters.currentPage, [`${page}`]);
  url = addQueriesToUrl(url, ApiParameters.itemsPerPage, [`${gamesPerPage}`]);
  url = addQueriesToUrl(url, ApiParameters.platform, platforms);
  url = addQueriesToUrl(url, ApiParameters.region, regions);

  const options: RequestInit = {
    method: 'GET',
  };

  return ajax.getJSON<GamesResult>(url.href, options);
}

type GetGameArguments = {
  id: string,
};

export function getGame({ id }: GetGameArguments) {
  const url = getGameDetailsEndpoint(id);
  const options: RequestInit = {
    method: 'GET',
  };

  return ajax.getJSON<GameInfo>(url.href, options);
}
