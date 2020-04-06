import { Action } from 'redux';

export enum AppInfoActionsTypes {
  FetchAvailableLanguages = '[app-info] Fetch available languages',
  SetAvailableLanguages = '[app-info] Set available languages',
}

type setAvailableLanguagesPayload = {
  languages: string[]
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

export type AppInfoActions = SetAvailableLanguagesAction 
  | FetchAvailableLanguagesAction;
