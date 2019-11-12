import { Action } from 'redux';

import { GameResult } from '../../models/GameResult';
import { RegionsMap } from '../../models/Regions';
import { PlatformsMap } from '../../models/Platforms';

export enum GameSearchTypes {
  SetGames = '[game-search] Set Games',
  ChangeSearchQuery = '[game-search] Change search query'
}

export interface SetGamesAction extends Action {
  type: GameSearchTypes.SetGames,
  payload: GameResult[]
}
export const setGames = (games: GameResult[]): SetGamesAction => {
  return {
    type: GameSearchTypes.SetGames,
    payload: games
  };
};

type ChangeSearchQueryPayload = {
  searchQuery: string,
  searchedRegions: RegionsMap,
  searchedPlatforms: PlatformsMap,
  selectedGameResultsPage: number,
  gameResultsPerPage: number
};
export interface ChangeSearchQueryAction extends Action {
  type: GameSearchTypes.ChangeSearchQuery,
  payload: ChangeSearchQueryPayload
}
export const changeSearchQuery = ({ searchQuery, searchedRegions, searchedPlatforms, selectedGameResultsPage, gameResultsPerPage }: ChangeSearchQueryPayload): ChangeSearchQueryAction => {
  return {
    type: GameSearchTypes.ChangeSearchQuery,
    payload: {
      searchQuery,
      searchedRegions,
      searchedPlatforms,
      selectedGameResultsPage,
      gameResultsPerPage
    }
  };
}

export type GameSearchActions = SetGamesAction | ChangeSearchQueryAction;