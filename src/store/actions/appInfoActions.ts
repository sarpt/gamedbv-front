import { Action } from 'redux';
import { Language } from '../../models/Language';
import { Region } from '../../models/Region';

export enum AppInfoActionsTypes {
  FetchAvailableLanguages = '[app-info] Fetch available languages',
  FetchAvailableLanguagesError = '[app-info] [error] Fetch available languages error',
  SetAvailableLanguages = '[app-info] Set available languages',
  FetchAvailableRegions = '[app-info] Fetch available regions',
  FetchAvailableRegionsError = '[app-info] [error] Fetch available regions error',
  SetAvailableRegions = '[app-info] Set available regions',
}

type setAvailableLanguagesPayload = {
  languages: Language[]
};
export interface SetAvailableLanguagesAction extends Action {
  type: AppInfoActionsTypes.SetAvailableLanguages,
  payload: setAvailableLanguagesPayload,
}

export const setAvailableLanguages = ({ languages }: setAvailableLanguagesPayload) => {
  return {
    type: AppInfoActionsTypes.SetAvailableLanguages,
    payload: {
      languages
    }, 
  };
};

export interface FetchAvailableLanguagesAction extends Action {
  type: AppInfoActionsTypes.FetchAvailableLanguages,
}

export const fetchAvailableLanguages = () => {
  return {
    type: AppInfoActionsTypes.FetchAvailableLanguages,
  };
};

export interface FetchAvailableLanguagesErrorAction extends Action {
  type: AppInfoActionsTypes.FetchAvailableLanguagesError,
}

export const fetchAvailableLanguagesError = () => {
  return {
    type: AppInfoActionsTypes.FetchAvailableLanguagesError,
  };
};

export interface FetchAvailableRegionsAction extends Action {
  type: AppInfoActionsTypes.FetchAvailableRegions,
}

export const fetchAvailableRegions = () => {
  return {
    type: AppInfoActionsTypes.FetchAvailableRegions,
  };
};

export interface FetchAvailableRegionsErrorAction extends Action {
  type: AppInfoActionsTypes.FetchAvailableRegionsError,
}

export const fetchAvailableRegionsError = () => {
  return {
    type: AppInfoActionsTypes.FetchAvailableRegionsError,
  };
};

type setAvailableRegionsPayload = {
  regions: Region[]
};
export interface SetAvailableRegionsAction extends Action {
  type: AppInfoActionsTypes.SetAvailableRegions,
  payload: setAvailableRegionsPayload,
}

export const setAvailableRegions = ({ regions }: setAvailableRegionsPayload) => {
  return {
    type: AppInfoActionsTypes.SetAvailableRegions,
    payload: {
      regions 
    }, 
  };
};

export type AppInfoActions = SetAvailableLanguagesAction 
  | FetchAvailableLanguagesAction
  | FetchAvailableLanguagesErrorAction
  | SetAvailableRegionsAction
  | FetchAvailableRegionsAction
  | FetchAvailableRegionsErrorAction;
