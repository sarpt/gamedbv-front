import { AppState } from '../../core/store/store';

export const selectGameSearchStore = (store: AppState) => store.gameSearchReducer;
export const selectSearchQuery = (store: AppState) => selectGameSearchStore(store).searchQuery;
export const selectRegions = (store: AppState) =>  selectGameSearchStore(store).searchedRegions;
export const selectSearchedPlatforms = (store: AppState) =>  selectGameSearchStore(store).searchedPlatforms;
export const selectGameSearchError = (store: AppState) => selectGameSearchStore(store).searchError;
export const selectShouldFilterByText = (store: AppState) => selectGameSearchStore(store).shouldFilterByText;
