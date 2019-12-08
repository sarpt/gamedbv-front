import {
  GameSearchTypes,
  GameSearchActions,
} from '../actions/gameSearchActions';

import { RegionsMap, Regions } from '../../models/Regions';
import { Platforms, PlatformsMap } from '../../models/Platforms';

type SearchError = {
  hasError: boolean,
  message?: string
};

type State = {
  searchQuery: string,
  shouldFilterByText: boolean,
  searchedRegions: RegionsMap,
  searchedPlatforms: PlatformsMap,
  searchError: SearchError 
};

const initialState: State = {
  searchQuery: '',
  shouldFilterByText: true,
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
  searchError: {
    hasError: false
  }
};

export const gameSearchReducer = (state: State = initialState, action: GameSearchActions): State => {
  switch (action.type) {
    case GameSearchTypes.ChangeSearchQuery:
      return {
        ...state,
        searchQuery: action.payload.searchQuery,
        shouldFilterByText: action.payload.shouldGetAllGames,
      };
    case GameSearchTypes.ChangePlatforms:
      return {
        ...state,
        searchedPlatforms: action.payload.platforms
      };
    case GameSearchTypes.ChangeRegions:
      return {
        ...state,
        searchedRegions: action.payload.regions
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
