import { Platform } from '../../common/models/platform';
import { UpdatesStatusActions, UpdatesStatusActionsTypes } from '../actions/updates';

type State = {
  selectedPlatforms: Platform[],
  updatesInProgress: Platform[],
};
const initialState: State = {
  selectedPlatforms: [],
  updatesInProgress: [],
};

export const updatesStatusReducer = (state: State = initialState, action: UpdatesStatusActions): State => {
  switch (action.type) {
    case UpdatesStatusActionsTypes.SetPlatforms:
      return { ...state, selectedPlatforms: action.payload.platforms };
    case UpdatesStatusActionsTypes.UpdatePlatforms:
      return { ...state, updatesInProgress: action.payload.platforms };
    case UpdatesStatusActionsTypes.PlatformsUpdateDone:
      return { ...state, updatesInProgress: [] };
    default:
      return state;
  }
};
