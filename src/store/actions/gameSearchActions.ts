import { Action } from 'redux';

import { RegionsMap } from '../../models/Regions';
import { PlatformsMap } from '../../models/Platforms';

export enum GameSearchActionsTypes {
  FetchSearchResults = '[game-search] Fetch search results',
  ChangeSearchOptions = '[game-search] Change games search options',
  ChangeSearchQuery = '[game-search] Change search query',
  ChangePlatforms = '[game-search] Change platforms',
  ChangeRegions = '[game-search] Change regions',
  SetGameSearchError = '[game-search] Set game search error'
}

type ChangeSearchOptionsPayload = {
  searchQuery: string,
  shouldGetAllGames: boolean,
  searchedRegions: RegionsMap,
  searchedPlatforms: PlatformsMap,
  selectedGameResultsPage: number,
  gameResultsPerPage: number
};
export interface ChangeSearchOptionsAction extends Action {
  type: GameSearchActionsTypes.ChangeSearchOptions,
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
    type: GameSearchActionsTypes.ChangeSearchOptions,
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
  type: GameSearchActionsTypes.ChangeSearchQuery,
  payload: ChangeSearchQueryPayload
}
export const changeSearchQuery = ({
  searchQuery,
  shouldGetAllGames
}: ChangeSearchQueryPayload): ChangeSearchQueryAction => {
  return {
    type: GameSearchActionsTypes.ChangeSearchQuery,
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
  type: GameSearchActionsTypes.ChangePlatforms,
  payload: ChangePlatformsPayload
}
export const changePlatforms = ({
  platforms
}: ChangePlatformsPayload): ChangePlatformsAction => {
  return {
    type: GameSearchActionsTypes.ChangePlatforms,
    payload: {
      platforms
    }
  }
};

type ChangeRegionsPayload = {
  regions: RegionsMap
}
export interface ChangeRegionsAction extends Action {
  type: GameSearchActionsTypes.ChangeRegions,
  payload: ChangeRegionsPayload
}
export const changeRegions = ({
  regions 
}: ChangeRegionsPayload): ChangeRegionsAction => {
  return {
    type: GameSearchActionsTypes.ChangeRegions,
    payload: {
      regions
    }
  }
};

type SetGameSearchErrorPayload = {
  message: string
};
export interface SetGameSearchErrorAction extends Action {
  type: GameSearchActionsTypes.SetGameSearchError,
  payload: SetGameSearchErrorPayload
}
export const setGameSearchError = ({ message }: SetGameSearchErrorPayload): SetGameSearchErrorAction => {
  return {
    type: GameSearchActionsTypes.SetGameSearchError,
    payload: {
      message
    }
  }
};

export interface FetchSearchResultsAction extends Action {
  type: GameSearchActionsTypes.FetchSearchResults
}
export const fetchSearchResults = (): FetchSearchResultsAction => {
  return {
    type: GameSearchActionsTypes.FetchSearchResults
  }
};

export type GameSearchActions = ChangeSearchOptionsAction
  | ChangeSearchQueryAction
  | ChangePlatformsAction
  | ChangeRegionsAction
  | FetchSearchResultsAction
  | SetGameSearchErrorAction;