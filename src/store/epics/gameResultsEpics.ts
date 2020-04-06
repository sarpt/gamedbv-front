import { map, filter, withLatestFrom } from "rxjs/operators";
import { ActionsObservable, ofType, StateObservable } from "redux-observable";

import { GameSearchActions, GameSearchActionsTypes, ChangeSearchQueryAction, ChangePlatformsAction, ChangeRegionsAction } from "../actions/gameSearchActions";
import { GameSearchResultsActions, GameSearchResultsActionsTypes, ChangeResultsPerPageAction, changePage } from "../actions/gameSearchResultsActions";
import { AppState } from "../store";
import { selectCurrentPage } from "../selectors/gameSearchResultsSelectors";

export const resetToFirstPage = (
  actions$: ActionsObservable<GameSearchActions | GameSearchResultsActions>,
  state$: StateObservable<AppState>,
) => {
  return actions$.pipe(
    ofType<GameSearchActions | GameSearchResultsActions, ChangeSearchQueryAction | ChangePlatformsAction | ChangeRegionsAction | ChangeResultsPerPageAction>(
      GameSearchActionsTypes.ChangeSearchQuery,
      GameSearchActionsTypes.ChangePlatforms,
      GameSearchActionsTypes.ChangeRegions,
      GameSearchResultsActionsTypes.ChangeResultsPerPage
    ),
    withLatestFrom(state$),
    filter(([, state]) => selectCurrentPage(state) !== 0),
    map(() => {
      return changePage({ page: 0 });
    })
  );
};