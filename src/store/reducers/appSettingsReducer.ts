import {
  AppSettingsActionsTypes,
  AppSettingsActions,
 } from "../actions/appSettingsActions";

type State = {
  prefferedLanguageCode: string,
}
const initialState: State = {
  prefferedLanguageCode: 'EN',
};

export const appSettingsReducer = (state: State = initialState, action: AppSettingsActions): State => {
  switch (action.type) {
    case AppSettingsActionsTypes.SetPrefferedLanguageCode:
      return { ...state, prefferedLanguageCode: action.payload.language };
    default:
      return state;
  }
};
