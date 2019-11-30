import { of } from 'rxjs';
import { map, concatMap, catchError, filter, withLatestFrom } from 'rxjs/operators';
import { ofType, ActionsObservable, StateObservable } from 'redux-observable';

import {
  GameSearchTypes,
  GameSearchActions,
  setGameSearchError,
  ChangeSearchQueryAction,
  ChangePlatformsAction,
  ChangeRegionsAction
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

function shouldSearchGames(searchQuery: string, shouldGetAllGames: boolean): boolean {
  return shouldGetAllGames || searchQuery.length !== 0;
}

export const searchGamesEpic = (
  actions$: ActionsObservable<GameSearchActions>,
  state$: StateObservable<AppState>
) => {
  return actions$.pipe(
    ofType<GameSearchActions | GameSearchResultsActions, ChangeSearchQueryAction | ChangePlatformsAction | ChangeRegionsAction | ChangePageAction | ChangeResultsPerPageAction>(
      GameSearchTypes.ChangeSearchQuery,
      GameSearchTypes.ChangePlatforms,
      GameSearchTypes.ChangeRegions,
      GameSearchResultsTypes.ChangePage,
      GameSearchResultsTypes.ChangeResultsPerPage
    ),
    withLatestFrom(state$),
    map(([, state]) => {
      return {
        ...selectGameSearchStore(state),
        ...selectGameSearchResultsStore(state)
      }
      
    }),
    filter((state) => shouldSearchGames(state.searchQuery, state.shouldGetAllGames)),
    concatMap((state) => {
      const searchGamesRequestProperties = {
        searchQuery: state.searchQuery,
        shouldGetAllGames: state.shouldGetAllGames,
        page: state.currentPage,
        gamesPerPage: state.gameResultsPerPage,
        regions: booleanMapToArray<Regions>(state.searchedRegions),
        platforms: booleanMapToArray<Platforms>(state.searchedPlatforms)
      };

      return searchGames(searchGamesRequestProperties)
        .pipe(
          map((games) => {
            return setGames(games);
          }),
          catchError((error) => {
            return of(setGameSearchError({ message: getAjaxErrorMessage(error) }));
          })
        );
    })    
  );
};
