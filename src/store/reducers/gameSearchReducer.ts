import {
  GameSearchActionsTypes,
  GameSearchActions,
} from '../actions/gameSearchActions';

import { Platforms, PlatformsMap } from '../../models/Platforms';

type SearchError = {
  hasError: boolean,
  message?: string,
};

type State = {
  searchQuery: string,
  shouldFilterByText: boolean,
  searchedRegions: Set<string>,
  searchedPlatforms: PlatformsMap,
  searchError: SearchError,
};

const initialState: State = {
  searchQuery: '',
  shouldFilterByText: true,
  searchedRegions: new Set<string>(),
  searchedPlatforms: {
    [Platforms.NGC]: true,
    [Platforms.WII]: true,
    [Platforms.PS3]: true,
    [Platforms.NDS]: true,
    [Platforms.N3DS]: true,
    [Platforms.SWITCH]: true,
  },
  searchError: {
    hasError: false,
  },
};

export const gameSearchReducer = (state: State = initialState, action: GameSearchActions): State => {
  switch (action.type) {
    case GameSearchActionsTypes.ChangeSearchQuery:
      return {
        ...state,
        searchQuery: action.payload.searchQuery,
        shouldFilterByText: action.payload.shouldGetAllGames,
      };
    case GameSearchActionsTypes.ChangePlatforms:
      return {
        ...state,
        searchedPlatforms: action.payload.platforms,
      };
    case GameSearchActionsTypes.AddSearchedRegion:
      return {
        ...state,
        searchedRegions: addSearchedRegion(state.searchedRegions, action.payload.regionCode),
      };
    case GameSearchActionsTypes.RemoveSearchedRegion:
      return {
        ...state,
        searchedRegions: removeSearchedRegion(state.searchedRegions, action.payload.regionCode),
      };
    case GameSearchActionsTypes.SetGameSearchError:
      return {
        ...state,
        searchError: { hasError: true, message: action.payload.message },
      };
    default:
      return state;
  }
};

function addSearchedRegion(searchedRegions: Set<string>, regionCode: string): Set<string> {
  const newSearchedRegionsSet = new Set<string>(searchedRegions);
  newSearchedRegionsSet.add(regionCode);

  return newSearchedRegionsSet;
}

function removeSearchedRegion(searchedRegions: Set<string>, regionCode: string): Set<string> {
  const newSearchedRegionsSet = new Set<string>(searchedRegions);
  newSearchedRegionsSet.delete(regionCode);

  return newSearchedRegionsSet;
}
