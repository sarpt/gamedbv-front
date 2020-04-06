import { 
  AppSettingsActionsTypes,
  AppSettingsActions,
 } from "../actions/appSettingsActions";

type State = {
  prefferedLanguage: string
}
const initialState: State = {
  prefferedLanguage: 'EN',
};

export const appSettingsReducer = (state: State = initialState, action: AppSettingsActions) => {
  switch (action.type) {
    case AppSettingsActionsTypes.SetPrefferedLanguage:
      return { ...state, prefferedLanguage: action.payload.language };
    default:
      return state;
  }
};