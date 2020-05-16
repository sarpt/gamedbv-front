import {
  GameSearchResultsActionsTypes,
  GameSearchResultsActions,
} from '../actions/results';

import { GameInfo } from '../../common/models/game-info';

const initialSelectedPage = 0;
const initialGamesPerPage = 10;

type State = {
  currentPage: number,
  gameSearchResults: GameInfo[],
  gameResultsPerPage: number,
  total: number,
};

const initialState: State = {
  currentPage: initialSelectedPage,
  gameSearchResults: [],
  gameResultsPerPage: initialGamesPerPage,
  total: 0,
};

export const gameSearchResultsReducer = (state: State = initialState, action: GameSearchResultsActions): State => {
  switch (action.type) {
    case GameSearchResultsActionsTypes.SetSearchResults:
      return { ...state, gameSearchResults: action.payload.games, total: action.payload.total };
    case GameSearchResultsActionsTypes.ChangePage:
      return { ...state, currentPage: action.payload.page };
    case GameSearchResultsActionsTypes.ChangeResultsPerPage:
      return { ...state, gameResultsPerPage: action.payload.resultsPerPage };
    default:
      return state;
  }
};
