import { AppState } from "../../../store/store";

export const selectGameSearchResultsStore = (store: AppState) => store.gameSearchResultsReducer;
export const selectGameSearchResults = (store: AppState) => selectGameSearchResultsStore(store).gameSearchResults;
export const selectGameSearchResultsTotal = (store: AppState) => selectGameSearchResultsStore(store).total;
export const areAnyGameSearchResultsAvailable = (store: AppState) => selectGameSearchResultsTotal(store) > 0;
export const selectCurrentPage = (store: AppState) => selectGameSearchResultsStore(store).currentPage;
export const selectGameResultsPerPage = (store: AppState) => selectGameSearchResultsStore(store).gameResultsPerPage;
