import { of } from 'rxjs';
import { map, concatMap, catchError, withLatestFrom } from 'rxjs/operators';
import { ofType, ActionsObservable, StateObservable } from 'redux-observable';

import {
  GameSearchTypes,
  GameSearchActions,
  setGameSearchError,
  ChangeSearchQueryAction,
  ChangePlatformsAction,
  ChangeRegionsAction,
  fetchSearchResults,
  FetchSearchResultsAction
} from '../actions/gameSearchActions';
import {
  setGames, GameSearchResultsActions, ChangePageAction, ChangeResultsPerPageAction, GameSearchResultsTypes
} from '../actions/gameSearchResultsActions';

import { searchGames } from '../../functions/gamesApi';
import { getAjaxErrorMessage } from '../../functions/errorUtils';
import { booleanMapToArray } from '../../functions/booleanMapToArray';
import { Regions } from '../../models/Regions';
import { Platforms } from '../../models/Platforms';
import { AppState } from '../store';

import { selectGameSearchStore } from '../selectors/gameSearchSelectors';
import { selectGameSearchResultsStore } from '../selectors/gameSearchResultsSelectors';

export const handleSearchQueryChange = (
  actions$: ActionsObservable<GameSearchActions>
) => {
  return actions$.pipe(
    ofType<GameSearchActions | GameSearchResultsActions, ChangeSearchQueryAction | ChangePlatformsAction | ChangeRegionsAction | ChangePageAction | ChangeResultsPerPageAction>(
      GameSearchTypes.ChangeSearchQuery,
      GameSearchTypes.ChangePlatforms,
      GameSearchTypes.ChangeRegions,
      GameSearchResultsTypes.ChangePage,
      GameSearchResultsTypes.ChangeResultsPerPage
    ),
    map(() => {
      return fetchSearchResults();
    })
  );
};

export const fetchGamesResults = (
  actions$: ActionsObservable<GameSearchActions>,
  state$: StateObservable<AppState>
) => {
  return actions$.pipe(
    ofType<GameSearchActions,FetchSearchResultsAction>(
      GameSearchTypes.FetchSearchResults
    ),
    withLatestFrom(state$),
    map(([, state]) => {
      return {
        ...selectGameSearchStore(state),
        ...selectGameSearchResultsStore(state)
      }
      
    }),
    concatMap((state) => {
      const searchGamesRequestProperties = {
        searchQuery: state.searchQuery,
        shouldFilterByText: state.shouldFilterByText,
        page: state.currentPage,
        gamesPerPage: state.gameResultsPerPage,
        regions: booleanMapToArray<Regions>(state.searchedRegions),
        platforms: booleanMapToArray<Platforms>(state.searchedPlatforms)
      };

      return searchGames(searchGamesRequestProperties)
        .pipe(
          map((result) => {
            return setGames(result.games);
          }),
          catchError((error) => {
            return of(setGameSearchError({ message: getAjaxErrorMessage(error) }));
          })
        );
    })    
  );
};
