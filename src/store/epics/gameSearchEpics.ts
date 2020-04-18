import { of } from 'rxjs';
import { map, concatMap, catchError, withLatestFrom } from 'rxjs/operators';
import { ofType, ActionsObservable, StateObservable } from 'redux-observable';

import {
  GameSearchActionsTypes,
  GameSearchActions,
  setGameSearchError,
  ChangeSearchQueryAction,
  fetchSearchResults,
  FetchSearchResultsAction,
  AddSearchedRegionAction,
  RemoveSearchedRegionAction,
  AddSearchedPlatformAction,
  RemoveSearchedPlatformAction,
} from '../actions/gameSearchActions';
import {
  setGames, GameSearchResultsActions, ChangePageAction, ChangeResultsPerPageAction, GameSearchResultsActionsTypes,
} from '../actions/gameSearchResultsActions';

import { searchGames } from '../../functions/gamesApi';
import { getAjaxErrorMessage } from '../../functions/errorUtils';
import { AppState } from '../store';

import { selectGameSearchStore } from '../selectors/gameSearchSelectors';
import { selectGameSearchResultsStore } from '../selectors/gameSearchResultsSelectors';

const handleGameSearchChange$ = (
  actions$: ActionsObservable<GameSearchActions>,
) => {
  return actions$.pipe(
    ofType<GameSearchActions | GameSearchResultsActions, ChangeSearchQueryAction | AddSearchedPlatformAction | RemoveSearchedPlatformAction | AddSearchedRegionAction | RemoveSearchedRegionAction | ChangePageAction | ChangeResultsPerPageAction>(
      GameSearchActionsTypes.ChangeSearchQuery,
      GameSearchActionsTypes.AddSearchedRegion,
      GameSearchActionsTypes.RemoveSearchedPlatform,
      GameSearchActionsTypes.AddSearchedPlatform,
      GameSearchActionsTypes.RemoveSearchedRegion,
      GameSearchResultsActionsTypes.ChangePage,
      GameSearchResultsActionsTypes.ChangeResultsPerPage,
    ),
    map(() => {
      return fetchSearchResults();
    }),
  );
};

const fetchGamesResults$ = (
  actions$: ActionsObservable<GameSearchActions>,
  state$: StateObservable<AppState>,
) => {
  return actions$.pipe(
    ofType<GameSearchActions,FetchSearchResultsAction>(
      GameSearchActionsTypes.FetchSearchResults,
    ),
    withLatestFrom(state$),
    map(([, state]) => {
      return {
        ...selectGameSearchStore(state),
        ...selectGameSearchResultsStore(state),
      };
    }),
    concatMap((state) => {
      const searchGamesRequestProperties = {
        searchQuery: state.searchQuery,
        shouldFilterByText: state.shouldFilterByText,
        page: state.currentPage,
        gamesPerPage: state.gameResultsPerPage,
        regions: [...state.searchedRegions],
        platforms: [...state.searchedPlatforms],
      };

      return searchGames(searchGamesRequestProperties)
        .pipe(
          map((result) => {
            return setGames({ games: result.games, total: result.total });
          }),
          catchError((error) => {
            return of(setGameSearchError({ message: getAjaxErrorMessage(error) }));
          }),
        );
    }),
  );
};

export const gameSearchEpics = [
  handleGameSearchChange$,
  fetchGamesResults$,
];
