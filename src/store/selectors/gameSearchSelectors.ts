import { AppState } from "../store";

const selectGameSearchStore = (store: AppState) => store.gameSearchReducer;

export const selectSearchQuery = (store: AppState) => selectGameSearchStore(store).searchQuery;
export const selectGames = (store: AppState) => selectGameSearchStore(store).gameResults;
export const selectSelectedPage = (store: AppState) => selectGameSearchStore(store).selectedGameResultsPage;
export const selectGamesPerPage = (store: AppState) => selectGameSearchStore(store).gameResultsPerPage;
export const selectRegions = (store: AppState) =>  selectGameSearchStore(store).searchedRegions;
export const selectPlatforms = (store: AppState) =>  selectGameSearchStore(store).searchedPlatforms;
export const selectGameSearchError = (store: AppState) => selectGameSearchStore(store).searchError;
