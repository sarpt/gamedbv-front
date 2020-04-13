import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { ofType, ActionsObservable } from 'redux-observable';

import {
  AppInfoActions,
  AppInfoActionsTypes,
  FetchAvailableLanguagesAction,
  setAvailableLanguages,
  fetchAvailableLanguagesError,
  FetchAvailableRegionsAction,
  setAvailableRegions,
  fetchAvailableRegionsError
} from '../actions/appInfoActions';
import { getAvailableLanguages, getAvailableRegions } from '../../functions/appInfoApi';

export const fetchAvailableLanguages$ = (actions$: ActionsObservable<AppInfoActions>) => {
  return actions$.pipe(
    ofType<AppInfoActions, FetchAvailableLanguagesAction>(AppInfoActionsTypes.FetchAvailableLanguages),
    switchMap(() => {
      return getAvailableLanguages().pipe(
        map((response) => {
          return setAvailableLanguages({ languages: response.languages });
        }),
        catchError(() => {
          return of(fetchAvailableLanguagesError());
        })
      );
    })
  );
};

export const fetchAvailableRegions$ = (actions$: ActionsObservable<AppInfoActions>) => {
  return actions$.pipe(
    ofType<AppInfoActions, FetchAvailableRegionsAction>(AppInfoActionsTypes.FetchAvailableRegions),
    switchMap(() => {
      return getAvailableRegions().pipe(
        map((response) => {
          return setAvailableRegions({ regions: response.regions })
        }),
        catchError(() => {
          return of(fetchAvailableRegionsError());
        })
      )
    })
  );
};
