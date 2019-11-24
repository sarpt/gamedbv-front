import { Action } from 'redux';

import { GameResult } from '../../models/GameResult';
import { RegionsMap } from '../../models/Regions';
import { PlatformsMap } from '../../models/Platforms';

export enum GameSearchTypes {
  SetSearchResults = '[game-search] Set games search results',
  ChangeSearchOptions = '[game-search] Change games search options',
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

type ChangeSearchQueryPayload = {
  searchQuery: string,
  shouldGetAllGames: boolean,
  searchedRegions: RegionsMap,
  searchedPlatforms: PlatformsMap,
  selectedGameResultsPage: number,
  gameResultsPerPage: number
};
export interface ChangeSearchOptionsAction extends Action {
  type: GameSearchTypes.ChangeSearchOptions,
  payload: ChangeSearchQueryPayload
}
export const changeSearchQuery = ({
  searchQuery,
  shouldGetAllGames,
  searchedRegions,
  searchedPlatforms,
  selectedGameResultsPage,
  gameResultsPerPage
}: ChangeSearchQueryPayload): ChangeSearchOptionsAction => {
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

export type GameSearchActions = SetSearchResultsAction | ChangeSearchOptionsAction | SetGameSearchErrorAction;