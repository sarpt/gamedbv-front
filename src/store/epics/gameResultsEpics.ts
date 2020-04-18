import { map, filter, withLatestFrom } from "rxjs/operators";
import { ActionsObservable, ofType, StateObservable } from "redux-observable";

import {
  GameSearchActions,
  GameSearchActionsTypes,
  ChangeSearchQueryAction,
  AddSearchedRegionAction,
  RemoveSearchedRegionAction,
  AddSearchedPlatformAction,
  RemoveSearchedPlatformAction,
} from "../actions/gameSearchActions";
import {
  GameSearchResultsActions,
  GameSearchResultsActionsTypes,
  ChangeResultsPerPageAction,
  changePage,
} from "../actions/gameSearchResultsActions";
import { AppState } from "../store";
import { selectCurrentPage } from "../selectors/gameSearchResultsSelectors";

const resetToFirstPage$ = (
  actions$: ActionsObservable<GameSearchActions | GameSearchResultsActions>,
  state$: StateObservable<AppState>,
) => {
  return actions$.pipe(
    ofType<GameSearchActions | GameSearchResultsActions, ChangeSearchQueryAction | AddSearchedPlatformAction | RemoveSearchedPlatformAction | AddSearchedRegionAction | RemoveSearchedRegionAction | ChangeResultsPerPageAction>(
      GameSearchActionsTypes.ChangeSearchQuery,
      GameSearchActionsTypes.AddSearchedPlatform,
      GameSearchActionsTypes.RemoveSearchedPlatform,
      GameSearchActionsTypes.AddSearchedRegion,
      GameSearchActionsTypes.RemoveSearchedRegion,
      GameSearchResultsActionsTypes.ChangeResultsPerPage,
    ),
    withLatestFrom(state$),
    filter(([, state]) => selectCurrentPage(state) !== 0),
    map(() => {
      return changePage({ page: 0 });
    }),
  );
};

export const gameResultsEpics = [
  resetToFirstPage$,
];
