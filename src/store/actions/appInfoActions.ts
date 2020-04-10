import { Action } from 'redux';
import { Language } from '../../models/Language';

export enum AppInfoActionsTypes {
  FetchAvailableLanguages = '[app-info] Fetch available languages',
  FetchAvailableLanguagesError = '[app-info] [error] Fetch available languages error',
  SetAvailableLanguages = '[app-info] Set available languages',
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

export type AppInfoActions = SetAvailableLanguagesAction 
  | FetchAvailableLanguagesAction
  | FetchAvailableLanguagesErrorAction;
