import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ofType, ActionsObservable } from 'redux-observable';
import { GameDetailsActions, GameDetailsActionsTypes, SetGameIdAction } from '../actions/details';

const setGameIdEpic$ = (actions$: ActionsObservable<GameDetailsActions>) => {
  return actions$.pipe(
    ofType<GameDetailsActions, SetGameIdAction>(GameDetailsActionsTypes.SetGameId),
    map(() => {
      of([]);
    }),
  );
};

export const gameDetailsEpics = [
  setGameIdEpic$,
];
