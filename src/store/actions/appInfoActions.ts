import { Action } from 'redux';
import { Language } from '../../models/Language';
import { Region } from '../../models/Region';
import { Platform } from '../../models/Platform';

export enum AppInfoActionsTypes {
  FetchAvailableLanguages = '[app-info] Fetch available languages',
  FetchAvailableLanguagesError = '[app-info] [error] Fetch available languages error',
  SetAvailableLanguages = '[app-info] Set available languages',
  FetchAvailableRegions = '[app-info] Fetch available regions',
  FetchAvailableRegionsError = '[app-info] [error] Fetch available regions error',
  SetAvailableRegions = '[app-info] Set available regions',
  FetchAvailablePlatforms = '[app-info] Fetch available platforms',
  FetchAvailablePlatformsError = '[app-info] [error] Fetch available platforms error',
  SetAvailablePlatforms = '[app-info] Set available platforms',
}

type setAvailableLanguagesPayload = {
  languages: Language[],
};
export interface SetAvailableLanguagesAction extends Action {
  type: AppInfoActionsTypes.SetAvailableLanguages;
  payload: setAvailableLanguagesPayload;
}

export const dispatchSetAvailableLanguages = ({ languages }: setAvailableLanguagesPayload) => {
  return {
    type: AppInfoActionsTypes.SetAvailableLanguages,
    payload: {
      languages,
    },
  };
};

export interface FetchAvailableLanguagesAction extends Action {
  type: AppInfoActionsTypes.FetchAvailableLanguages;
}

export const dispatchFetchAvailableLanguages = () => {
  return {
    type: AppInfoActionsTypes.FetchAvailableLanguages,
  };
};

export interface FetchAvailableLanguagesErrorAction extends Action {
  type: AppInfoActionsTypes.FetchAvailableLanguagesError;
}

export const dispatchFetchAvailableLanguagesError = () => {
  return {
    type: AppInfoActionsTypes.FetchAvailableLanguagesError,
  };
};

export interface FetchAvailableRegionsAction extends Action {
  type: AppInfoActionsTypes.FetchAvailableRegions;
}

export const dispatchFetchAvailableRegions = () => {
  return {
    type: AppInfoActionsTypes.FetchAvailableRegions,
  };
};

export interface FetchAvailableRegionsErrorAction extends Action {
  type: AppInfoActionsTypes.FetchAvailableRegionsError;
}

export const dispatchFetchAvailableRegionsError = () => {
  return {
    type: AppInfoActionsTypes.FetchAvailableRegionsError,
  };
};

type setAvailableRegionsPayload = {
  regions: Region[],
};
export interface SetAvailableRegionsAction extends Action {
  type: AppInfoActionsTypes.SetAvailableRegions;
  payload: setAvailableRegionsPayload;
}

export const dispatchSetAvailableRegions = ({ regions }: setAvailableRegionsPayload) => {
  return {
    type: AppInfoActionsTypes.SetAvailableRegions,
    payload: {
      regions,
    },
  };
};

export interface FetchAvailablePlatformsAction extends Action {
  type: AppInfoActionsTypes.FetchAvailablePlatforms;
}

export const dispatchFetchAvailablePlatforms = () => {
  return {
    type: AppInfoActionsTypes.FetchAvailablePlatforms,
  };
};

export interface FetchAvailablePlatformsErrorAction extends Action {
  type: AppInfoActionsTypes.FetchAvailablePlatformsError;
}

export const dispatchFetchAvailablePlatformsError = () => {
  return {
    type: AppInfoActionsTypes.FetchAvailablePlatformsError,
  };
};

type setAvailablePlatformsPayload = {
  platforms: Platform[],
};
export interface SetAvailablePlatformsAction extends Action {
  type: AppInfoActionsTypes.SetAvailablePlatforms;
  payload: setAvailablePlatformsPayload;
}

export const dispatchSetAvailablePlatforms = ({ platforms }: setAvailablePlatformsPayload) => {
  return {
    type: AppInfoActionsTypes.SetAvailablePlatforms,
    payload: {
      platforms,
    },
  };
};

export type AppInfoActions = SetAvailableLanguagesAction
  | FetchAvailableLanguagesAction
  | FetchAvailableLanguagesErrorAction
  | SetAvailableRegionsAction
  | FetchAvailableRegionsAction
  | FetchAvailableRegionsErrorAction
  | SetAvailablePlatformsAction
  | FetchAvailablePlatformsAction
  | FetchAvailablePlatformsErrorAction;
