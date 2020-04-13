import { of } from 'rxjs';
import { map, concatMap, catchError, withLatestFrom } from 'rxjs/operators';
import { ofType, ActionsObservable, StateObservable } from 'redux-observable';

import {
  GameSearchActionsTypes,
  GameSearchActions,
  setGameSearchError,
  ChangeSearchQueryAction,
  ChangePlatformsAction,
  fetchSearchResults,
  FetchSearchResultsAction,
  AddSearchedRegionAction,
  RemoveSearchedRegionAction
} from '../actions/gameSearchActions';
import {
  setGames, GameSearchResultsActions, ChangePageAction, ChangeResultsPerPageAction, GameSearchResultsActionsTypes
} from '../actions/gameSearchResultsActions';

import { searchGames } from '../../functions/gamesApi';
import { getAjaxErrorMessage } from '../../functions/errorUtils';
import { booleanMapToArray } from '../../functions/booleanMapToArray';
import { Platforms } from '../../models/Platforms';
import { AppState } from '../store';

import { selectGameSearchStore } from '../selectors/gameSearchSelectors';
import { selectGameSearchResultsStore } from '../selectors/gameSearchResultsSelectors';

export const handleGameSearchChange = (
  actions$: ActionsObservable<GameSearchActions>
) => {
  return actions$.pipe(
    ofType<GameSearchActions | GameSearchResultsActions, ChangeSearchQueryAction | ChangePlatformsAction | AddSearchedRegionAction | RemoveSearchedRegionAction | ChangePageAction | ChangeResultsPerPageAction>(
      GameSearchActionsTypes.ChangeSearchQuery,
      GameSearchActionsTypes.ChangePlatforms,
      GameSearchActionsTypes.AddSearchedRegion,
      GameSearchActionsTypes.RemoveSearchedRegion,
      GameSearchResultsActionsTypes.ChangePage,
      GameSearchResultsActionsTypes.ChangeResultsPerPage
    ),
    map(() => {
      return fetchSearchResults();
    })
  );
};

export const fetchGamesResults = (
  actions$: ActionsObservable<GameSearchActions>,
  state$: StateObservable<AppState>,
) => {
  return actions$.pipe(
    ofType<GameSearchActions,FetchSearchResultsAction>(
      GameSearchActionsTypes.FetchSearchResults
    ),
    withLatestFrom(state$),
    map(([, state]) => {
      return {
        ...selectGameSearchStore(state),
        ...selectGameSearchResultsStore(state)
      };
    }),
    concatMap((state) => {
      const searchGamesRequestProperties = {
        searchQuery: state.searchQuery,
        shouldFilterByText: state.shouldFilterByText,
        page: state.currentPage,
        gamesPerPage: state.gameResultsPerPage,
        regions: [...state.searchedRegions],
        platforms: booleanMapToArray<Platforms>(state.searchedPlatforms)
      };

      return searchGames(searchGamesRequestProperties)
        .pipe(
          map((result) => {
            return setGames({ games: result.games, total: result.total });
          }),
          catchError((error) => {
            return of(setGameSearchError({ message: getAjaxErrorMessage(error) }));
          })
        );
    })    
  );
};
