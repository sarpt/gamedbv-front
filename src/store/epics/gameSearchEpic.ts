import { of } from 'rxjs';
import { map, concatMap, catchError, filter, withLatestFrom } from 'rxjs/operators';
import { ofType, ActionsObservable, StateObservable } from 'redux-observable';

import {
  GameSearchTypes,
  ChangeSearchOptionsAction,
  GameSearchActions,
  setGames,
  setGameSearchError,
  ChangeSearchQueryAction,
  ChangePlatformsAction,
  ChangeRegionsAction
} from '../actions/gameSearchActions';
import { searchGames } from '../../functions/gamesApi';
import { getAjaxErrorMessage } from '../../functions/errorUtils';
import { booleanMapToArray } from '../../functions/booleanMapToArray';
import { Regions } from '../../models/Regions';
import { Platforms } from '../../models/Platforms';
import { AppState } from '../store';
import { selectGameSearchStore } from '../selectors/gameSearchSelectors';

function shouldSearchGames(searchQuery: string, shouldGetAllGames: boolean): boolean {
  return shouldGetAllGames || searchQuery.length !== 0;
}

export const searchGamesEpic = (
  actions$: ActionsObservable<GameSearchActions>,
  state$: StateObservable<AppState>
) => {
  return actions$.pipe(
    ofType<GameSearchActions, ChangeSearchQueryAction | ChangePlatformsAction | ChangeRegionsAction>(
      GameSearchTypes.ChangeSearchQuery,
      GameSearchTypes.ChangePlatforms,
      GameSearchTypes.ChangeRegions
    ),
    withLatestFrom(state$),
    map(([, state]) => selectGameSearchStore(state)),
    filter((state) => shouldSearchGames(state.searchQuery, state.shouldGetAllGames)),
    concatMap((state) => {
      const searchGamesRequestProperties = {
        searchQuery: state.searchQuery,
        shouldGetAllGames: state.shouldGetAllGames,
        page: state.selectedGameResultsPage,
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

export const changeSearchOptionsEpic = (actions$: ActionsObservable<GameSearchActions>) => {
  return actions$.pipe(
    ofType<GameSearchActions, ChangeSearchOptionsAction>(GameSearchTypes.ChangeSearchOptions),
    filter(({ payload }) => shouldSearchGames(payload.searchQuery, payload.shouldGetAllGames)),
    concatMap(({ payload }) => {
      const searchGamesRequestProperties = {
        searchQuery: payload.searchQuery,
        shouldGetAllGames: payload.shouldGetAllGames,
        page: payload.selectedGameResultsPage,
        gamesPerPage: payload.gameResultsPerPage,
        regions: booleanMapToArray<Regions>(payload.searchedRegions),
        platforms: booleanMapToArray<Platforms>(payload.searchedPlatforms)
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
    }),
  );
};
