import { 
  AppInfoActionsTypes,
  AppInfoActions
} from "../actions/appInfoActions";

type State = {
  availableLanguages: string[],
}
const initialState: State = {
  availableLanguages: [],
};

export const appInfoReducer = (state: State = initialState, action: AppInfoActions) => {
  switch (action.type) {
    case AppInfoActionsTypes.SetAvailableLanguages:
      return { ...state, availableLanguages: action.payload.languages };
    default:
      return state;
  }
};