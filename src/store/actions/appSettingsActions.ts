import { Action } from 'redux';

export enum AppSettingsActionsTypes {
  SetPrefferedLanguage = '[app-settings] Set preffered language',
}

type SetPrefferedLanguagePayload = {
  language: string
};
export interface SetPrefferedLanguageAction extends Action {
  type: AppSettingsActionsTypes.SetPrefferedLanguage,
  payload: SetPrefferedLanguagePayload,
}

export const setPrefferedLanguage = ({ language }: SetPrefferedLanguagePayload) => {
  return {
    type: AppSettingsActionsTypes.SetPrefferedLanguage,
    payload: {
      language
    }, 
  };
};

export type AppSettingsActions = SetPrefferedLanguageAction;
