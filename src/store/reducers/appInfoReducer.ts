import { 
  AppInfoActionsTypes,
  AppInfoActions
} from "../actions/appInfoActions";
import { Language } from "../../models/Language";
import { Region } from "../../models/Region";

type State = {
  availableLanguages: Language[],
  availableRegions: Region[],
}
const initialState: State = {
  availableLanguages: [],
  availableRegions: [],
};

export const appInfoReducer = (state: State = initialState, action: AppInfoActions): State => {
  switch (action.type) {
    case AppInfoActionsTypes.SetAvailableLanguages:
      return { ...state, availableLanguages: action.payload.languages };
    case AppInfoActionsTypes.SetAvailableRegions:
      return { ...state, availableRegions: action.payload.regions };
    default:
      return state;
  }
};
