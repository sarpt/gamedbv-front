import { Action } from 'redux';

import { PlatformsMap } from '../../models/Platforms';
import { Region } from '../../models/Region';

export enum GameSearchActionsTypes {
  FetchSearchResults = '[game-search] Fetch search results',
  ChangeSearchOptions = '[game-search] Change games search options',
  ChangeSearchQuery = '[game-search] Change search query',
  ChangePlatforms = '[game-search] Change platforms',
  AddSearchedRegion = '[game-search] Add searched region',
  RemoveSearchedRegion = '[game-search] Remove searched region',
  SetGameSearchError = '[game-search] [error] Set game search error',
}

type ChangeSearchOptionsPayload = {
  searchQuery: string,
  shouldGetAllGames: boolean,
  searchedRegions: Region[],
  searchedPlatforms: PlatformsMap,
  selectedGameResultsPage: number,
  gameResultsPerPage: number,
};
export interface ChangeSearchOptionsAction extends Action {
  type: GameSearchActionsTypes.ChangeSearchOptions;
  payload: ChangeSearchOptionsPayload;
}
export const dispatchChangeSearchOptions = ({
  searchQuery,
  shouldGetAllGames,
  searchedRegions,
  searchedPlatforms,
  selectedGameResultsPage,
  gameResultsPerPage,
}: ChangeSearchOptionsPayload): ChangeSearchOptionsAction => {
  return {
    type: GameSearchActionsTypes.ChangeSearchOptions,
    payload: {
      searchQuery,
      shouldGetAllGames,
      searchedRegions,
      searchedPlatforms,
      selectedGameResultsPage,
      gameResultsPerPage,
    },
  };
};

type ChangeSearchQueryPayload = {
  searchQuery: string,
  shouldGetAllGames: boolean,
};
export interface ChangeSearchQueryAction extends Action {
  type: GameSearchActionsTypes.ChangeSearchQuery;
  payload: ChangeSearchQueryPayload;
}
export const dispatchChangeSearchQuery = ({
  searchQuery,
  shouldGetAllGames,
}: ChangeSearchQueryPayload): ChangeSearchQueryAction => {
  return {
    type: GameSearchActionsTypes.ChangeSearchQuery,
    payload: {
      searchQuery,
      shouldGetAllGames,
    },
  };
};

type ChangePlatformsPayload = {
  platforms: PlatformsMap,
};
export interface ChangePlatformsAction extends Action {
  type: GameSearchActionsTypes.ChangePlatforms;
  payload: ChangePlatformsPayload;
}
export const dispatchChangePlatforms = ({
  platforms,
}: ChangePlatformsPayload): ChangePlatformsAction => {
  return {
    type: GameSearchActionsTypes.ChangePlatforms,
    payload: {
      platforms,
    },
  };
};

type AddSearchedRegionPayload = {
  regionCode: string,
};
export interface AddSearchedRegionAction extends Action {
  type: GameSearchActionsTypes.AddSearchedRegion;
  payload: AddSearchedRegionPayload;
}
export const dispatchAddSearchedRegion = ({
  regionCode,
}: AddSearchedRegionPayload): AddSearchedRegionAction => {
  return {
    type: GameSearchActionsTypes.AddSearchedRegion,
    payload: {
      regionCode,
    },
  };
};

type RemoveSearchedRegionPayload = {
  regionCode: string,
};
export interface RemoveSearchedRegionAction extends Action {
  type: GameSearchActionsTypes.RemoveSearchedRegion;
  payload: RemoveSearchedRegionPayload;
}
export const dispatchRemoveSearchedRegion = ({
  regionCode,
}: RemoveSearchedRegionPayload): RemoveSearchedRegionAction => {
  return {
    type: GameSearchActionsTypes.RemoveSearchedRegion,
    payload: {
      regionCode,
    },
  };
};

type SetGameSearchErrorPayload = {
  message: string,
};
export interface SetGameSearchErrorAction extends Action {
  type: GameSearchActionsTypes.SetGameSearchError;
  payload: SetGameSearchErrorPayload;
}
export const dispatchSetGameSearchError = ({ message }: SetGameSearchErrorPayload): SetGameSearchErrorAction => {
  return {
    type: GameSearchActionsTypes.SetGameSearchError,
    payload: {
      message,
    },
  };
};

export interface FetchSearchResultsAction extends Action {
  type: GameSearchActionsTypes.FetchSearchResults;
}
export const dispatchFetchSearchResults = (): FetchSearchResultsAction => {
  return {
    type: GameSearchActionsTypes.FetchSearchResults,
  };
};

export type GameSearchActions = ChangeSearchOptionsAction
  | ChangeSearchQueryAction
  | ChangePlatformsAction
  | AddSearchedRegionAction
  | RemoveSearchedRegionAction
  | FetchSearchResultsAction
  | SetGameSearchErrorAction;
