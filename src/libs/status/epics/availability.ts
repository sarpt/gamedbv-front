import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { ofType, ActionsObservable } from 'redux-observable';

import {
  AvailabilityActions,
  AvailabilityActionsTypes,
  FetchAvailableLanguagesAction,
  setAvailableLanguages,
  fetchAvailableLanguagesError,
  FetchAvailableRegionsAction,
  setAvailableRegions,
  fetchAvailableRegionsError,
  FetchAvailablePlatformsAction,
  fetchAvailablePlatformsError,
  setAvailablePlatforms,
} from '../actions/availability';
import {
  getAvailableLanguages,
  getAvailableRegions,
  getAvailablePlatforms,
} from '../../api/functions/status';

const fetchAvailableLanguages$ = (actions$: ActionsObservable<AvailabilityActions>) => {
  return actions$.pipe(
    ofType<AvailabilityActions, FetchAvailableLanguagesAction>(AvailabilityActionsTypes.FetchAvailableLanguages),
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

const fetchAvailableRegions$ = (actions$: ActionsObservable<AvailabilityActions>) => {
  return actions$.pipe(
    ofType<AvailabilityActions, FetchAvailableRegionsAction>(AvailabilityActionsTypes.FetchAvailableRegions),
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

const fetchAvailablePlatforms$ = (actions$: ActionsObservable<AvailabilityActions>) => {
  return actions$.pipe(
    ofType<AvailabilityActions, FetchAvailablePlatformsAction>(AvailabilityActionsTypes.FetchAvailablePlatforms),
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

export const availabilityEpics = [
  fetchAvailableLanguages$,
  fetchAvailableRegions$,
  fetchAvailablePlatforms$,
];
