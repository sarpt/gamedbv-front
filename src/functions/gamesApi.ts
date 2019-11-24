import { ajax } from 'rxjs/ajax';

import { GameResult } from '../models/GameResult';
import { Platforms } from '../models/Platforms';
import { Regions } from '../models/Regions';
import { ApiParameters } from '../models/ApiParameters'

import { addQueriesToUrl } from './urlUtils';

const server = 'localhost:3001';
const gamesEndpoint = `http://${server}/games`;

type SearchGamesArguments = {
  searchQuery: string,
  shouldGetAllGames: boolean,
  page: number,
  gamesPerPage: number,
  regions: Regions[],
  platforms: Platforms[]
};

export function searchGames({
  searchQuery,
  shouldGetAllGames,
  page,
  gamesPerPage,
  regions,
  platforms
}: SearchGamesArguments) {
  let url = gamesEndpoint;
  if (!shouldGetAllGames) {
    url = addQueriesToUrl(url, ApiParameters.searchQuery, [searchQuery]);
  }
  url = addQueriesToUrl(url, ApiParameters.currentPage, [page]);
  url = addQueriesToUrl(url, ApiParameters.itemsPerPage, [gamesPerPage]);
  url = addQueriesToUrl(url, ApiParameters.platform, platforms);
  url = addQueriesToUrl(url, ApiParameters.region, regions);

  const options: RequestInit = {
    method: 'GET'
  };

  return ajax.getJSON<GameResult[]>(url, options);
}

type GetGameArguments = {
  id: string
};

export function getGame({ id }: GetGameArguments) {
  const url = `${gamesEndpoint}/${id}`;
  const options: RequestInit = {
    method: 'GET'
  };

  return ajax.getJSON(url, options);
}