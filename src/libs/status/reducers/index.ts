import {
  AppInfoActionsTypes,
  AppInfoActions,
} from "../actions";
import { Language } from "../../common/models/language";
import { Region } from "../../common/models/region";
import { Platform } from '../../common/models/platform';

type State = {
  availableLanguages: Language[],
  availableRegions: Region[],
  availablePlatforms: Platform[],
};
const initialState: State = {
  availableLanguages: [],
  availableRegions: [],
  availablePlatforms: [],
};

export const appInfoReducer = (state: State = initialState, action: AppInfoActions): State => {
  switch (action.type) {
    case AppInfoActionsTypes.SetAvailableLanguages:
      return { ...state, availableLanguages: action.payload.languages };
    case AppInfoActionsTypes.SetAvailableRegions:
      return { ...state, availableRegions: action.payload.regions };
    case AppInfoActionsTypes.SetAvailablePlatforms:
      return { ...state, availablePlatforms: action.payload.platforms };
    default:
      return state;
  }
};
