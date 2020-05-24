import { Action } from 'redux';
import { Language } from '../../common/models/language';
import { Region } from '../../common/models/region';
import { Platform } from '../../common/models/platform';

export enum AvailabilityActionsTypes {
  FetchAvailableLanguages = '[status-availability] Fetch available languages',
  FetchAvailableLanguagesError = '[status-availability] [error] Fetch available languages error',
  SetAvailableLanguages = '[status-availability] Set available languages',
  FetchAvailableRegions = '[status-availability] Fetch available regions',
  FetchAvailableRegionsError = '[status-availability] [error] Fetch available regions error',
  SetAvailableRegions = '[status-availability] Set available regions',
  FetchAvailablePlatforms = '[status-availability] Fetch available platforms',
  FetchAvailablePlatformsError = '[status-availability] [error] Fetch available platforms error',
  SetAvailablePlatforms = '[status-availability] Set available platforms',
}

type setAvailableLanguagesPayload = {
  languages: Language[],
};
export interface SetAvailableLanguagesAction extends Action {
  type: AvailabilityActionsTypes.SetAvailableLanguages;
  payload: setAvailableLanguagesPayload;
}

export const setAvailableLanguages = ({ languages }: setAvailableLanguagesPayload) => {
  return {
    type: AvailabilityActionsTypes.SetAvailableLanguages,
    payload: {
      languages,
    },
  };
};

export interface FetchAvailableLanguagesAction extends Action {
  type: AvailabilityActionsTypes.FetchAvailableLanguages;
}

export const fetchAvailableLanguages = () => {
  return {
    type: AvailabilityActionsTypes.FetchAvailableLanguages,
  };
};

export interface FetchAvailableLanguagesErrorAction extends Action {
  type: AvailabilityActionsTypes.FetchAvailableLanguagesError;
}

export const fetchAvailableLanguagesError = () => {
  return {
    type: AvailabilityActionsTypes.FetchAvailableLanguagesError,
  };
};

export interface FetchAvailableRegionsAction extends Action {
  type: AvailabilityActionsTypes.FetchAvailableRegions;
}

export const fetchAvailableRegions = () => {
  return {
    type: AvailabilityActionsTypes.FetchAvailableRegions,
  };
};

export interface FetchAvailableRegionsErrorAction extends Action {
  type: AvailabilityActionsTypes.FetchAvailableRegionsError;
}

export const fetchAvailableRegionsError = () => {
  return {
    type: AvailabilityActionsTypes.FetchAvailableRegionsError,
  };
};

type setAvailableRegionsPayload = {
  regions: Region[],
};
export interface SetAvailableRegionsAction extends Action {
  type: AvailabilityActionsTypes.SetAvailableRegions;
  payload: setAvailableRegionsPayload;
}

export const setAvailableRegions = ({ regions }: setAvailableRegionsPayload) => {
  return {
    type: AvailabilityActionsTypes.SetAvailableRegions,
    payload: {
      regions,
    },
  };
};

export interface FetchAvailablePlatformsAction extends Action {
  type: AvailabilityActionsTypes.FetchAvailablePlatforms;
}

export const fetchAvailablePlatforms = () => {
  return {
    type: AvailabilityActionsTypes.FetchAvailablePlatforms,
  };
};

export interface FetchAvailablePlatformsErrorAction extends Action {
  type: AvailabilityActionsTypes.FetchAvailablePlatformsError;
}

export const fetchAvailablePlatformsError = () => {
  return {
    type: AvailabilityActionsTypes.FetchAvailablePlatformsError,
  };
};

type setAvailablePlatformsPayload = {
  platforms: Platform[],
};
export interface SetAvailablePlatformsAction extends Action {
  type: AvailabilityActionsTypes.SetAvailablePlatforms;
  payload: setAvailablePlatformsPayload;
}

export const setAvailablePlatforms = ({ platforms }: setAvailablePlatformsPayload) => {
  return {
    type: AvailabilityActionsTypes.SetAvailablePlatforms,
    payload: {
      platforms,
    },
  };
};

export type AvailabilityActions = SetAvailableLanguagesAction
  | FetchAvailableLanguagesAction
  | FetchAvailableLanguagesErrorAction
  | SetAvailableRegionsAction
  | FetchAvailableRegionsAction
  | FetchAvailableRegionsErrorAction
  | SetAvailablePlatformsAction
  | FetchAvailablePlatformsAction
  | FetchAvailablePlatformsErrorAction;
