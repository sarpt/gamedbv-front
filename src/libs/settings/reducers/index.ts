import {
  AppSettingsActionsTypes,
  AppSettingsActions,
 } from "../actions";

type State = {
  prefferedLanguageCode: string,
  showOnlyAvailablePlatforms: boolean,
};
const initialState: State = {
  prefferedLanguageCode: 'EN',
  showOnlyAvailablePlatforms: true,
};

export const appSettingsReducer = (state: State = initialState, action: AppSettingsActions): State => {
  switch (action.type) {
    case AppSettingsActionsTypes.SetPrefferedLanguageCode:
      return { ...state, prefferedLanguageCode: action.payload.language };
    case AppSettingsActionsTypes.SetShowOnlyAvailablePlatforms:
      return { ...state, showOnlyAvailablePlatforms: action.payload.show };
    default:
      return state;
  }
};
