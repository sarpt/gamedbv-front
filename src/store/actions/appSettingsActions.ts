import { Action } from 'redux';

export enum AppSettingsActionsTypes {
  SetPrefferedLanguageCode = '[app-settings] Set preffered language code',
}

type SetPrefferedLanguageCodePayload = {
  language: string,
};
export interface SetPrefferedLanguageCodeAction extends Action {
  type: AppSettingsActionsTypes.SetPrefferedLanguageCode;
  payload: SetPrefferedLanguageCodePayload;
}

export const setPrefferedLanguageCode = ({ language }: SetPrefferedLanguageCodePayload) => {
  return {
    type: AppSettingsActionsTypes.SetPrefferedLanguageCode,
    payload: {
      language,
    },
  };
};

export type AppSettingsActions = SetPrefferedLanguageCodeAction;
