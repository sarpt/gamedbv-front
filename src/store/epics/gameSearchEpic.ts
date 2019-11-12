import { ofType, ActionsObservable } from 'redux-observable';
import { of } from 'rxjs';
import { map, concatMap, catchError } from 'rxjs/operators';

import { GameSearchTypes, ChangeSearchQueryAction, GameSearchActions, setGames } from '../actions/gameSearchActions';
import { searchGames } from '../../functions/gamesApi';
import { booleanMapToArray } from '../../functions/booleanMapToArray';
import { Regions } from '../../models/Regions';
import { Platforms } from '../../models/Platforms';

export const changeSearchQueryEpic = (actions$: ActionsObservable<GameSearchActions>) => {
  return actions$.pipe(
    ofType<GameSearchActions, ChangeSearchQueryAction>(GameSearchTypes.ChangeSearchQuery),
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
            return of({
              type: 'AJAX_ERROR',
              payload: error.message
            });
          })
        );
    }),
  );
};

