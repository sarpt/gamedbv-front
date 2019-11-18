import { of } from 'rxjs';
import { map, concatMap, catchError, filter } from 'rxjs/operators';
import { ofType, ActionsObservable } from 'redux-observable';

import { GameSearchTypes, ChangeSearchQueryAction, GameSearchActions, setGames, setGameSearchError } from '../actions/gameSearchActions';
import { searchGames } from '../../functions/gamesApi';
import { getAjaxErrorMessage } from '../../functions/errorUtils';
import { booleanMapToArray } from '../../functions/booleanMapToArray';
import { Regions } from '../../models/Regions';
import { Platforms } from '../../models/Platforms';

export const changeSearchQueryEpic = (actions$: ActionsObservable<GameSearchActions>) => {
  return actions$.pipe(
    ofType<GameSearchActions, ChangeSearchQueryAction>(GameSearchTypes.ChangeSearchQuery),
    filter(({ payload }) => payload.searchQuery.length !== 0),
    concatMap(({ payload }) => {
      const searchGamesRequestProperties = {
        searchQuery: payload.searchQuery,
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
