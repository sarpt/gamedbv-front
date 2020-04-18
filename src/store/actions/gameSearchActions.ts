import { Action } from 'redux';

import { Region } from '../../models/Region';
import { Platform } from '../../models/Platform';

export enum GameSearchActionsTypes {
  FetchSearchResults = '[game-search] Fetch search results',
  ChangeSearchOptions = '[game-search] Change games search options',
  ChangeSearchQuery = '[game-search] Change search query',
  ChangePlatforms = '[game-search] Change platforms',
  AddSearchedRegion = '[game-search] Add searched region',
  RemoveSearchedRegion = '[game-search] Remove searched region',
  AddSearchedPlatform = '[game-search] Add searched platform',
  RemoveSearchedPlatform = '[game-search] Remove searched platform',
  SetGameSearchError = '[game-search] [error] Set game search error',
}

type ChangeSearchOptionsPayload = {
  searchQuery: string,
  shouldGetAllGames: boolean,
  searchedRegions: Region[],
  searchedPlatforms: Platform[],
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

type AddSearchedPlatformPayload = {
  platformId: string,
};
export interface AddSearchedPlatformAction extends Action {
  type: GameSearchActionsTypes.AddSearchedPlatform;
  payload: AddSearchedPlatformPayload;
}
export const dispatchAddSearchedPlatform = ({
  platformId,
}: AddSearchedPlatformPayload): AddSearchedPlatformAction => {
  return {
    type: GameSearchActionsTypes.AddSearchedPlatform,
    payload: {
      platformId,
    },
  };
};

type RemoveSearchedPlatformPayload = {
  platformId: string,
};
export interface RemoveSearchedPlatformAction extends Action {
  type: GameSearchActionsTypes.RemoveSearchedPlatform;
  payload: RemoveSearchedPlatformPayload;
}
export const dispatchRemoveSearchedPlatform = ({
  platformId,
}: RemoveSearchedPlatformPayload): RemoveSearchedPlatformAction => {
  return {
    type: GameSearchActionsTypes.RemoveSearchedPlatform,
    payload: {
      platformId,
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
  | AddSearchedRegionAction
  | RemoveSearchedRegionAction
  | AddSearchedPlatformAction
  | RemoveSearchedPlatformAction
  | FetchSearchResultsAction
  | SetGameSearchErrorAction;
