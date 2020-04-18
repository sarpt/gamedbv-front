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
  fetchAvailableRegionsError,
  FetchAvailablePlatformsAction,
  fetchAvailablePlatformsError,
  setAvailablePlatforms,
} from '../actions/appInfoActions';
import {
  getAvailableLanguages,
  getAvailableRegions,
  getAvailablePlatforms,
} from '../../functions/appInfoApi';

const fetchAvailableLanguages$ = (actions$: ActionsObservable<AppInfoActions>) => {
  return actions$.pipe(
    ofType<AppInfoActions, FetchAvailableLanguagesAction>(AppInfoActionsTypes.FetchAvailableLanguages),
    switchMap(() => {
      return getAvailableLanguages().pipe(
        map((response) => {
          return setAvailableLanguages({ languages: response.languages });
        }),
        catchError(() => {
          return of(fetchAvailableLanguagesError());
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
          return setAvailableRegions({ regions: response.regions });
        }),
        catchError(() => {
          return of(fetchAvailableRegionsError());
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
          return setAvailablePlatforms({ platforms: response.platforms });
        }),
        catchError(() => {
          return of(fetchAvailablePlatformsError());
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
