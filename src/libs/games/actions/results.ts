import { Action } from 'redux';

import { GameInfo } from '../../common/models/GameInfo';

export enum GameSearchResultsActionsTypes {
  SetSearchResults = '[game-search-results] Set games search results',
  ChangeResultsPerPage = '[game-search-results] Change results per page',
  ChangePage = '[game-search-results] Change page of results',
}

type SetGamesPayload = {
  games: GameInfo[],
  total: number,
};
export interface SetSearchResultsAction extends Action {
  type: GameSearchResultsActionsTypes.SetSearchResults;
  payload: SetGamesPayload;
}
export const setGames = ({ games, total }: SetGamesPayload): SetSearchResultsAction => {
  return {
    type: GameSearchResultsActionsTypes.SetSearchResults,
    payload: {
      games,
      total,
    },
  };
};

type ChangeResultsPerPagePayload = {
  resultsPerPage: number,
};
export interface ChangeResultsPerPageAction extends Action {
  type: GameSearchResultsActionsTypes.ChangeResultsPerPage;
  payload: ChangeResultsPerPagePayload;
}
export const changeResultsPerPage = ({ resultsPerPage }: ChangeResultsPerPagePayload): ChangeResultsPerPageAction => {
  return {
    type: GameSearchResultsActionsTypes.ChangeResultsPerPage,
    payload: {
      resultsPerPage,
    },
  };
};

type ChangePagePayload = {
  page: number,
};
export interface ChangePageAction extends Action {
  type: GameSearchResultsActionsTypes.ChangePage;
  payload: ChangePagePayload;
}
export const changePage = ({ page }: ChangePagePayload): ChangePageAction => {
  return {
    type: GameSearchResultsActionsTypes.ChangePage,
    payload: {
      page,
    },
  };
};

export type GameSearchResultsActions = ChangePageAction
  | SetSearchResultsAction
  | ChangeResultsPerPageAction;
