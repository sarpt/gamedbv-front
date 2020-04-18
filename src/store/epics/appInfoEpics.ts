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
  dispatchSetAvailablePlatforms,
} from '../actions/appInfoActions';
import { getAvailableLanguages, getAvailableRegions, getAvailablePlatforms } from '../../functions/appInfoApi';

const fetchAvailableLanguages$ = (actions$: ActionsObservable<AppInfoActions>) => {
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

const fetchAvailableRegions$ = (actions$: ActionsObservable<AppInfoActions>) => {
  return actions$.pipe(
    ofType<AppInfoActions, FetchAvailableRegionsAction>(AppInfoActionsTypes.FetchAvailableRegions),
    switchMap(() => {
      return getAvailableRegions().pipe(
        map((response) => {
          return dispatchSetAvailableRegions({ regions: response.regions });
        }),
        catchError(() => {
          return of(dispatchFetchAvailableRegionsError());
        }),
      );
    }),
  );
};

const fetchAvailablePlatforms$ = (actions$: ActionsObservable<AppInfoActions>) => {
  return actions$.pipe(
    ofType<AppInfoActions, FetchAvailablePlatformsAction>(AppInfoActionsTypes.FetchAvailablePlatforms),
    switchMap(() => {
      return getAvailablePlatforms().pipe(
        map((response) => {
          return dispatchSetAvailablePlatforms({ platforms: response.platforms });
        }),
        catchError(() => {
          return of(dispatchFetchAvailablePlatformsError());
        }),
      );
    }),
  );
};

export const apiInfoEpics = [
  fetchAvailableLanguages$,
  fetchAvailableRegions$,
  fetchAvailablePlatforms$,
];
