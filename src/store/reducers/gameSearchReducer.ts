import {
  GameSearchActionsTypes,
  GameSearchActions,
} from '../actions/gameSearchActions';

type SearchError = {
  hasError: boolean,
  message?: string,
};

type State = {
  searchQuery: string,
  shouldFilterByText: boolean,
  searchedRegions: Set<string>,
  searchedPlatforms: Set<string>,
  searchError: SearchError,
};

const initialState: State = {
  searchQuery: '',
  shouldFilterByText: true,
  searchedRegions: new Set<string>(),
  searchedPlatforms: new Set<string>(),
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
    case GameSearchActionsTypes.AddSearchedPlatform:
      return {
        ...state,
        searchedPlatforms: addSearchedPlatform(state.searchedPlatforms, action.payload.platformId),
      };
    case GameSearchActionsTypes.RemoveSearchedPlatform:
      return {
        ...state,
        searchedPlatforms: removeSearchedPlatform(state.searchedPlatforms, action.payload.platformId),
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

function addSearchedPlatform(searchedPlatforms: Set<string>, platformId: string): Set<string> {
  const newSearchedPlatformsSet = new Set<string>(searchedPlatforms);
  newSearchedPlatformsSet.add(platformId);

  return newSearchedPlatformsSet;
}

function removeSearchedPlatform(searchedPlatforms: Set<string>, platformId: string): Set<string> {
  const newSearchedPlatformsSet = new Set<string>(searchedPlatforms);
  newSearchedPlatformsSet.delete(platformId);

  return newSearchedPlatformsSet;
}
