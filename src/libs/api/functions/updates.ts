import { Observer } from 'rxjs';

import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

import { Platform } from '../../common/models/platform';
import { WebsocketPayload } from '../models/websocket-payload';
import { Operations } from '../models/operations';

import { getUpdatesEndpoint } from './endpoints';

export function getUpdatesWebsocket(openObserver: Observer<Event>, closeObserver: Observer<CloseEvent>): WebSocketSubject<{}> {
  return webSocket({
    url: getUpdatesEndpoint().href,
    openObserver,
    closeObserver,
  });
}

export function updatePlatforms(ws: WebSocketSubject<WebsocketPayload>, platforms: Platform[]) {
  ws.next({
    op: Operations.Start,
    platforms: platforms.map(platform => platform.uid),
  });
}
