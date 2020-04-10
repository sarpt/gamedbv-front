import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { ofType, ActionsObservable } from 'redux-observable';

import { AppInfoActions, AppInfoActionsTypes, FetchAvailableLanguagesAction, setAvailableLanguages, fetchAvailableLanguagesError } from '../actions/appInfoActions';
import { getAvailableLanguages } from '../../functions/appInfoApi';

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