import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { ofType, ActionsObservable } from 'redux-observable';

import {
  AppInfoActions,
  AppInfoActionsTypes,
  FetchAvailableLanguagesAction,
  dispatchSetAvailableLanguages,
  dispatchFetchAvailableLanguagesError,
  FetchAvailableRegionsAction,
  dispatchSetAvailableRegions,
  dispatchFetchAvailableRegionsError,
  FetchAvailablePlatformsAction,
  dispatchFetchAvailablePlatformsError,
} from '../actions/appInfoActions';
import { getAvailableLanguages, getAvailableRegions } from '../../functions/appInfoApi';

export const fetchAvailableLanguages$ = (actions$: ActionsObservable<AppInfoActions>) => {
  return actions$.pipe(
    ofType<AppInfoActions, FetchAvailableLanguagesAction>(AppInfoActionsTypes.FetchAvailableLanguages),
    switchMap(() => {
      return getAvailableLanguages().pipe(
        map((response) => {
          return dispatchSetAvailableLanguages({ languages: response.languages });
        }),
        catchError(() => {
          return of(dispatchFetchAvailableLanguagesError());
        }),
      );
    }),
  );
};

export const fetchAvailableRegions$ = (actions$: ActionsObservable<AppInfoActions>) => {
  return actions$.pipe(
    ofType<AppInfoActions, FetchAvailableRegionsAction>(AppInfoActionsTypes.FetchAvailableRegions),
    switchMap(() => {
      return getAvailableRegions().pipe(
        map((response) => {
          return dispatchSetAvailableRegions({ regions: response.regions })
        }),
        catchError(() => {
          return of(dispatchFetchAvailableRegionsError());
        }),
      )
    }),
  );
};

export const fetchAvailablePlatforms$ = (actions$: ActionsObservable<AppInfoActions>) => {
  return actions$.pipe(
    ofType<AppInfoActions, FetchAvailablePlatformsAction>(AppInfoActionsTypes.FetchAvailablePlatforms),
    switchMap(() => {
      return getAvailableRegions().pipe(
        map((response) => {
          return dispatchSetAvailableRegions({ regions: response.regions })
        }),
        catchError(() => {
          return of(dispatchFetchAvailablePlatformsError());
        }),
      )
    }),
  );
};
