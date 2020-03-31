import { map } from "rxjs/operators";
import { ActionsObservable, ofType } from "redux-observable";

import { GameSearchActions, GameSearchTypes, ChangeSearchQueryAction, ChangePlatformsAction, ChangeRegionsAction } from "../actions/gameSearchActions";
import { GameSearchResultsActions, GameSearchResultsTypes, ChangeResultsPerPageAction, changePage } from "../actions/gameSearchResultsActions";

export const resetToFirstPage = (
  actions$: ActionsObservable<GameSearchActions | GameSearchResultsActions>
) => {
  return actions$.pipe(
    ofType<GameSearchActions | GameSearchResultsActions, ChangeSearchQueryAction | ChangePlatformsAction | ChangeRegionsAction | ChangeResultsPerPageAction>(
      GameSearchTypes.ChangeSearchQuery,
      GameSearchTypes.ChangePlatforms,
      GameSearchTypes.ChangeRegions,
      GameSearchResultsTypes.ChangeResultsPerPage
    ),
    map(() => {
      return changePage({ page: 0 });
    })
  );
};