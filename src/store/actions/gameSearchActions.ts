import { Action } from 'redux';

import { GameResult } from '../../models/GameResult';
import { RegionsMap } from '../../models/Regions';
import { PlatformsMap } from '../../models/Platforms';

export enum GameSearchTypes {
  SetSearchResults = '[game-search] Set games search results',
  ChangeSearchOptions = '[game-search] Change games search options',
  ChangeSearchQuery = '[game-search] Change search query',
  ChangePlatforms = '[game-search] Change platforms',
  ChangeRegions = '[game-search] Change regions',
  SetGameSearchError = '[game-search] Set game search error'
}

export interface SetSearchResultsAction extends Action {
  type: GameSearchTypes.SetSearchResults,
  payload: GameResult[]
}
export const setGames = (games: GameResult[]): SetSearchResultsAction => {
  return {
    type: GameSearchTypes.SetSearchResults,
    payload: games
  };
};

type ChangeSearchOptionsPayload = {
  searchQuery: string,
  shouldGetAllGames: boolean,
  searchedRegions: RegionsMap,
  searchedPlatforms: PlatformsMap,
  selectedGameResultsPage: number,
  gameResultsPerPage: number
};
export interface ChangeSearchOptionsAction extends Action {
  type: GameSearchTypes.ChangeSearchOptions,
  payload: ChangeSearchOptionsPayload
}
export const changeSearchOptions = ({
  searchQuery,
  shouldGetAllGames,
  searchedRegions,
  searchedPlatforms,
  selectedGameResultsPage,
  gameResultsPerPage
}: ChangeSearchOptionsPayload): ChangeSearchOptionsAction => {
  return {
    type: GameSearchTypes.ChangeSearchOptions,
    payload: {
      searchQuery,
      shouldGetAllGames,
      searchedRegions,
      searchedPlatforms,
      selectedGameResultsPage,
      gameResultsPerPage
    }
  };
};

type ChangeSearchQueryPayload = {
  searchQuery: string,
  shouldGetAllGames: boolean,
}
export interface ChangeSearchQueryAction extends Action {
  type: GameSearchTypes.ChangeSearchQuery,
  payload: ChangeSearchQueryPayload
}
export const changeSearchQuery = ({
  searchQuery,
  shouldGetAllGames
}: ChangeSearchQueryPayload): ChangeSearchQueryAction => {
  return {
    type: GameSearchTypes.ChangeSearchQuery,
    payload: {
      searchQuery,
      shouldGetAllGames
    }
  }
};

type ChangePlatformsPayload = {
  platforms: PlatformsMap
}
export interface ChangePlatformsAction extends Action {
  type: GameSearchTypes.ChangePlatforms,
  payload: ChangePlatformsPayload
}
export const changePlatforms = ({
  platforms
}: ChangePlatformsPayload): ChangePlatformsAction => {
  return {
    type: GameSearchTypes.ChangePlatforms,
    payload: {
      platforms
    }
  }
};

type ChangeRegionsPayload = {
  regions: RegionsMap
}
export interface ChangeRegionsAction extends Action {
  type: GameSearchTypes.ChangeRegions,
  payload: ChangeRegionsPayload
}
export const changeRegions = ({
  regions 
}: ChangeRegionsPayload): ChangeRegionsAction => {
  return {
    type: GameSearchTypes.ChangeRegions,
    payload: {
      regions
    }
  }
};

type SetGameSearchErrorPayload = {
  message: string
};
export interface SetGameSearchErrorAction extends Action {
  type: GameSearchTypes.SetGameSearchError,
  payload: SetGameSearchErrorPayload
}
export const setGameSearchError = ({ message }: SetGameSearchErrorPayload): SetGameSearchErrorAction => {
  return {
    type: GameSearchTypes.SetGameSearchError,
    payload: {
      message
    }
  }
};

export type GameSearchActions = SetSearchResultsAction
  | ChangeSearchOptionsAction
  | ChangeSearchQueryAction
  | ChangePlatformsAction
  | ChangeRegionsAction
  | SetGameSearchErrorAction;