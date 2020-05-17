import { Action } from 'redux';

export enum AppSettingsActionsTypes {
  SetPrefferedLanguageCode = '[app-settings] Set preffered language code',
  SetShowOnlyAvailablePlatforms = '[app-settings] Set show only available platforms',
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

type SetShowOnlyAvailablePlatformsPayload = {
  show: boolean,
};
export interface SetShowOnlyAvailablePlatformsAction extends Action {
  type: AppSettingsActionsTypes.SetShowOnlyAvailablePlatforms;
  payload: SetShowOnlyAvailablePlatformsPayload;
}

export const setShowOnlyAvailablePlatforms = ({ show }: SetShowOnlyAvailablePlatformsPayload) => {
  return {
    type: AppSettingsActionsTypes.SetShowOnlyAvailablePlatforms,
    payload: {
      show,
    },
  };
};

export type AppSettingsActions = SetPrefferedLanguageCodeAction
  | SetShowOnlyAvailablePlatformsAction;
