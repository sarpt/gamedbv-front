
import { Action } from 'redux';

import { Platform } from '../../common/models/platform';
import { WebsocketPayload } from '../../api/models/websocket-payload';

export enum UpdatesStatusActionsTypes {
  Connect = '[status-updates] Connect to updates websocket',
  ConnectionOpened = '[status-updates] Connection to websocket opened',
  ConnectionClosed = '[status-updates] Connection to websocket closed',
  ConnectionError = '[status-updates] Updates websocket connection error',
  Disconnect = '[status-updated] Disconnect from updates websocket',
  UnhandledStatus = '[status-updated] Unhandled websocket message',
  MessageReceived = '[status-updates] Updates websocket message received',
  SetPlatforms = '[status-updates] Set platforms to update',
  UpdatePlatforms = '[status-updates] Update platforms',
  PlatformUpdateEnd = '[status-updates] Platform update ended',
  PlatformsUpdateDone = '[status-updates] Platforms update finished',
}

type setPlatformToUpdatePayload = {
  platforms: Platform[],
};
export interface SetPlatformsAction extends Action {
  type: UpdatesStatusActionsTypes.SetPlatforms;
  payload: setPlatformToUpdatePayload;
}

export const setPlatformsToUpdate = ({ platforms }: setPlatformToUpdatePayload) => {
  return {
    type: UpdatesStatusActionsTypes.SetPlatforms,
    payload: {
      platforms,
    },
  };
};

export interface ConnectToUpdatesWebsocketAction extends Action {
  type: UpdatesStatusActionsTypes.Connect;
}

export const connectToUpdatesWebsocket = () => {
  return {
    type: UpdatesStatusActionsTypes.Connect,
  };
};

type connectionErrorPayload = {
  message: string,
};
export interface ConnectionErrorAction extends Action {
  type: UpdatesStatusActionsTypes.ConnectionError;
  payload: connectionErrorPayload;
}

export const connectionError = ({ message }: connectionErrorPayload) => {
  return {
    type: UpdatesStatusActionsTypes.ConnectionError,
    payload: {
      message,
    },
  };
};

type messageReceivedPayload = WebsocketPayload;
export interface MessageReceivedAction extends Action {
  type: UpdatesStatusActionsTypes.MessageReceived;
  payload: messageReceivedPayload;
}

export const messageReceived = (payload: messageReceivedPayload) => {
  return {
    type: UpdatesStatusActionsTypes.MessageReceived,
    payload,
  };
};

export interface UnhandledStatusAction extends Action {
  type: UpdatesStatusActionsTypes.UnhandledStatus;
}

export const unhandledStatus = () => {
  return {
    type: UpdatesStatusActionsTypes.UnhandledStatus,
  };
};

type updatePlatformsPayload = {
  platforms: Platform[],
};
export interface UpdatePlatformsAction extends Action {
  type: UpdatesStatusActionsTypes.UpdatePlatforms;
  payload: updatePlatformsPayload;
}

export const updatePlatforms = ({ platforms }: updatePlatformsPayload) => {
  return {
    type: UpdatesStatusActionsTypes.UpdatePlatforms,
    payload: {
      platforms,
    },
  };
};

export interface PlatformsUpdateDoneAction extends Action {
  type: UpdatesStatusActionsTypes.PlatformsUpdateDone;
}

export const platformsUpdateDone = () => {
  return {
    type: UpdatesStatusActionsTypes.PlatformsUpdateDone,
  };
};

type platformUpdateEndPayload = {
  platform: string,
};
export interface PlatformUpdateEndAction extends Action {
  type: UpdatesStatusActionsTypes.PlatformUpdateEnd;
  payload: platformUpdateEndPayload;
}

export const platformUpdateEnd = ({ platform }: platformUpdateEndPayload) => {
  return {
    type: UpdatesStatusActionsTypes.PlatformUpdateEnd,
    payload: {
      platform,
    },
  };
};

export type UpdatesStatusActions = SetPlatformsAction
  | ConnectionErrorAction
  | MessageReceivedAction
  | UnhandledStatusAction
  | UpdatePlatformsAction
  | PlatformsUpdateDoneAction
  | PlatformUpdateEndAction
  | ConnectToUpdatesWebsocketAction;
