import {
  AvailabilityActionsTypes,
  AvailabilityActions,
} from '../actions/availability';
import { Language } from '../../common/models/language';
import { Region } from '../../common/models/region';
import { Platform } from '../../common/models/platform';

type State = {
  availableLanguages: Language[],
  availableRegions: Region[],
  platforms: Platform[],
};
const initialState: State = {
  availableLanguages: [],
  availableRegions: [],
  platforms: [],
};

export const availabilityStatusReducer = (state: State = initialState, action: AvailabilityActions): State => {
  switch (action.type) {
    case AvailabilityActionsTypes.SetAvailableLanguages:
      return { ...state, availableLanguages: action.payload.languages };
    case AvailabilityActionsTypes.SetAvailableRegions:
      return { ...state, availableRegions: action.payload.regions };
    case AvailabilityActionsTypes.SetAvailablePlatforms:
      return { ...state, platforms: action.payload.platforms };
    default:
      return state;
  }
};
