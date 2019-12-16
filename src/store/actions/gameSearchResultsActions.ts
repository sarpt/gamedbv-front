import { Action } from 'redux';

import { GameInfo } from '../../models/GameInfo';

export enum GameSearchResultsTypes {
  SetSearchResults = '[game-search-results] Set games search results',
  ChangeResultsPerPage = '[game-search-results] Change results per page',
  ChangePage = '[game-search-results] Change page of results'
};

export interface SetSearchResultsAction extends Action {
  type: GameSearchResultsTypes.SetSearchResults,
  payload: {
    games: GameInfo[]
  }
}
export const setGames = (games: GameInfo[]): SetSearchResultsAction => {
  return {
    type: GameSearchResultsTypes.SetSearchResults,
    payload: {
      games
    }
  };
};

type ChangeResultsPerPagePayload = {
  resultsPerPage: number 
};
export interface ChangeResultsPerPageAction extends Action {
  type: GameSearchResultsTypes.ChangeResultsPerPage,
  payload: ChangeResultsPerPagePayload
}
export const changeResultsPerPage = ({ resultsPerPage }: ChangeResultsPerPagePayload): ChangeResultsPerPageAction => {
  return {
    type: GameSearchResultsTypes.ChangeResultsPerPage,
    payload: {
      resultsPerPage
    }
  }
};

type ChangePagePayload = {
  page: number 
};
export interface ChangePageAction extends Action {
  type: GameSearchResultsTypes.ChangePage,
  payload: ChangePagePayload
}
export const changePage = ({ page }: ChangePagePayload): ChangePageAction => {
  return {
    type: GameSearchResultsTypes.ChangePage,
    payload: {
      page
    }
  }
};

export type GameSearchResultsActions = ChangePageAction
  | SetSearchResultsAction
  | ChangeResultsPerPageAction;