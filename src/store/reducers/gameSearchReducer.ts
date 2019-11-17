import {
  GameSearchTypes,
  GameSearchActions,
} from '../actions/gameSearchActions';

import { GameResult } from '../../models/GameResult';
import { RegionsMap, Regions } from '../../models/Regions';
import { Platforms, PlatformsMap } from '../../models/Platforms';

const initialSelectedPage = 0;
const gamesPerPage = 10;

type SearchError = {
  hasError: boolean,
  message?: string
};

type State = {
  searchQuery: string,
  searchedRegions: RegionsMap,
  searchedPlatforms: PlatformsMap,
  gameResults: GameResult[],
  selectedGameResultsPage: number,
  gameResultsPerPage: number,
  searchError: SearchError 
};

const initialState: State = {
  searchQuery: '',
  searchedRegions: {
    [Regions.NTSCJ]: true,
    [Regions.NTSCU]: true,
    [Regions.PAL]: true,
    [Regions.OTHER]: true
  },
  searchedPlatforms: {
    [Platforms.NGC]: true,
    [Platforms.WII]: true
  },
  gameResults: [],
  selectedGameResultsPage: initialSelectedPage,
  gameResultsPerPage: gamesPerPage,
  searchError: {
    hasError: false
  }
};

export const gameSearchReducer = (state: State = initialState, action: GameSearchActions): State => {
  switch (action.type) {
    case GameSearchTypes.SetGames:
      return { ...state, gameResults: action.payload, searchError: { hasError: false } }
    case GameSearchTypes.ChangeSearchQuery:
      return {
        ...state,
        searchQuery: action.payload.searchQuery,
        searchedRegions: action.payload.searchedRegions,
        searchedPlatforms: action.payload.searchedPlatforms,
        selectedGameResultsPage: action.payload.selectedGameResultsPage,
        gameResultsPerPage: action.payload.gameResultsPerPage
      };
    case GameSearchTypes.SetGameSearchError:
      return {
        ...state,
        searchError: { hasError: true, message: action.payload.message }
      };
    default:
      return state;
  }
};
