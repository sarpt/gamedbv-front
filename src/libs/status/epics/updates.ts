import { of, Subject } from 'rxjs';
import { WebSocketSubject } from 'rxjs/webSocket';
import { map, catchError, tap, filter, concatMap } from 'rxjs/operators';
import { ActionsObservable, ofType } from 'redux-observable';

import { getUpdatesWebsocket, updatePlatforms } from '../../api/functions/updates';
import { WebsocketPayload } from '../../api/models/websocket-payload';
import { UpdatesStatuses } from '../../api/models/updates-statuses';

import {
  UpdatesStatusActions,
  UpdatesStatusActionsTypes,
  ConnectToUpdatesWebsocketAction,
  connectionError,
  messageReceived,
  UpdatePlatformsAction,
  MessageReceivedAction,
  platformsUpdateDone,
  unhandledStatus,
  PlatformsUpdateDoneAction,
} from '../actions/updates';
import { fetchAvailablePlatforms } from '../actions/availability';

const openObserver = new Subject<Event>();
const closeObserver = new Subject<CloseEvent>();
let updatesWebsocket: WebSocketSubject<WebsocketPayload>;

const connectToUpdatesWebsocket$ = (actions$: ActionsObservable<UpdatesStatusActions>) => {
  return actions$.pipe(
    ofType<UpdatesStatusActions, ConnectToUpdatesWebsocketAction>(UpdatesStatusActionsTypes.Connect),
    concatMap(() => {
      updatesWebsocket = getUpdatesWebsocket(openObserver, closeObserver);

      return updatesWebsocket.pipe(
        map(payload => {
          return messageReceived(payload);
        }),
        catchError(err => {
          return of(connectionError({ message: err }));
        }),
      );
    }),
  );
};

const messageReceived$ = (actions$: ActionsObservable<UpdatesStatusActions>) => {
  return actions$.pipe(
    ofType<UpdatesStatusActions, MessageReceivedAction>(UpdatesStatusActionsTypes.MessageReceived),
    filter(({ payload: { status } }) => !!status),
    map(({ payload }) => {
      const status = payload.status!;

      switch (status) {
        case UpdatesStatuses.Done:
          return platformsUpdateDone();
        default:
          return unhandledStatus();
      }
    }),
  );
};

const updatePlatforms$ = (actions$: ActionsObservable<UpdatesStatusActions>) => {
  return actions$.pipe(
    ofType<UpdatesStatusActions, UpdatePlatformsAction>(UpdatesStatusActionsTypes.UpdatePlatforms),
    tap(({ payload: { platforms } }) => {
      updatePlatforms(updatesWebsocket, platforms);
    }),
    filter(() => false),
  );
};

const refetchAvailablePlatforms$ = (actions$: ActionsObservable<UpdatesStatusActions>) => {
  return actions$.pipe(
    ofType<UpdatesStatusActions, PlatformsUpdateDoneAction>(UpdatesStatusActionsTypes.PlatformsUpdateDone),
    map(() => {
      return fetchAvailablePlatforms();
    }),
  );
};

export const updatesEpics = [
  connectToUpdatesWebsocket$,
  updatePlatforms$,
  messageReceived$,
  refetchAvailablePlatforms$,
];
