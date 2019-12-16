import { AppState } from "../store";

export const selectGameSearchResultsStore = (store: AppState) => store.gameSearchResultsReducer;
export const selectGameSearchResults = (store: AppState) => selectGameSearchResultsStore(store).gameSearchResults;
export const areAnyGameSearchResultsAvailable = (store: AppState) => selectGameSearchResults(store).length > 0;
export const selectCurrentPage = (store: AppState) => selectGameSearchResultsStore(store).currentPage;
export const selectGameResultsPerPage = (store: AppState) => selectGameSearchResultsStore(store).gameResultsPerPage;