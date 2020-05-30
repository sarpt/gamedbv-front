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
  platformUpdateEnd,
  PlatformUpdateEndAction,
} from '../actions/updates';
import { fetchAvailablePlatforms } from '../actions/availability';
import { UpdatesSteps } from '../../api/models/updates-steps';

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
    filter(({ payload: { state } }) => !!state),
    map(({ payload }) => {
      const status = payload.state!;

      switch (status) {
        case UpdatesStatuses.Done:
          return platformsUpdateDone();
        case UpdatesStatuses.Progress:
          if (payload.step === UpdatesSteps.End) {
            return platformUpdateEnd({ platform: payload.platform! });
          }

          return unhandledStatus();
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

type refetchAvailablePlatformsTriggers = PlatformsUpdateDoneAction | PlatformUpdateEndAction;
const refetchAvailablePlatforms$ = (actions$: ActionsObservable<UpdatesStatusActions>) => {
  return actions$.pipe(
    ofType<UpdatesStatusActions, refetchAvailablePlatformsTriggers>(
      UpdatesStatusActionsTypes.PlatformsUpdateDone,
      UpdatesStatusActionsTypes.PlatformUpdateEnd,
    ),
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
