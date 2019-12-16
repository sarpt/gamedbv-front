import {
  GameSearchResultsTypes,
  GameSearchResultsActions,
} from '../actions/gameSearchResultsActions';

import { GameInfo } from '../../models/GameInfo';

const initialSelectedPage = 0;
const initialGamesPerPage = 10;

type State = {
  gameSearchResults: GameInfo[],
  currentPage: number,
  gameResultsPerPage: number,
};

const initialState: State = {
  gameSearchResults: [],
  currentPage: initialSelectedPage,
  gameResultsPerPage: initialGamesPerPage,
};

export const gameSearchResultsReducer = (state: State = initialState, action: GameSearchResultsActions): State => {
  switch (action.type) {
    case GameSearchResultsTypes.SetSearchResults:
      return { ...state, gameSearchResults: action.payload.games }
    case GameSearchResultsTypes.ChangePage:
      return { ...state, currentPage: action.payload.page }
    case GameSearchResultsTypes.ChangeResultsPerPage:
      return { ...state, gameResultsPerPage: action.payload.resultsPerPage }
    default:
      return state;
  }
};