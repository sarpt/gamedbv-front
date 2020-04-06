import { map, switchMap, catchError } from 'rxjs/operators';
import { ofType, ActionsObservable } from 'redux-observable';

import { AppInfoActions, AppInfoActionsTypes, FetchAvailableLanguagesAction, setAvailableLanguages } from '../actions/appInfoActions';
import { getAvailableLanguages } from '../../functions/appInfoApi';
import { of } from 'rxjs';

export const fetchAvailableLanguages$ = (actions$: ActionsObservable<AppInfoActions>) => {
  return actions$.pipe(
    ofType<AppInfoActions, FetchAvailableLanguagesAction>(AppInfoActionsTypes.FetchAvailableLanguages),
    switchMap(() => {
      return getAvailableLanguages().pipe(
        map((availableLanguages) => {
          return setAvailableLanguages({ languages: availableLanguages });
        }),
        catchError(() => {
          return of({type: "bruh"});
        })
      );
    })
  );
};