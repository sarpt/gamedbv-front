import { map, filter, withLatestFrom } from "rxjs/operators";
import { ActionsObservable, ofType, StateObservable } from "redux-observable";

import {
  GameSearchActions,
  GameSearchActionsTypes,
  ChangeSearchQueryAction,
  ChangePlatformsAction,
  AddSearchedRegionAction,
  RemoveSearchedRegionAction,
} from "../actions/gameSearchActions";
import {
  GameSearchResultsActions,
  GameSearchResultsActionsTypes,
  ChangeResultsPerPageAction,
  dispatchChangePage,
} from "../actions/gameSearchResultsActions";
import { AppState } from "../store";
import { selectCurrentPage } from "../selectors/gameSearchResultsSelectors";

const resetToFirstPage$ = (
  actions$: ActionsObservable<GameSearchActions | GameSearchResultsActions>,
  state$: StateObservable<AppState>,
) => {
  return actions$.pipe(
    ofType<GameSearchActions | GameSearchResultsActions, ChangeSearchQueryAction | ChangePlatformsAction | AddSearchedRegionAction | RemoveSearchedRegionAction | ChangeResultsPerPageAction>(
      GameSearchActionsTypes.ChangeSearchQuery,
      GameSearchActionsTypes.ChangePlatforms,
      GameSearchActionsTypes.AddSearchedRegion,
      GameSearchActionsTypes.RemoveSearchedRegion,
      GameSearchResultsActionsTypes.ChangeResultsPerPage,
    ),
    withLatestFrom(state$),
    filter(([, state]) => selectCurrentPage(state) !== 0),
    map(() => {
      return dispatchChangePage({ page: 0 });
    }),
  );
};

export const gameResultsEpics = [
  resetToFirstPage$,
];
