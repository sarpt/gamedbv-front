import { Platform } from '../../common/models/platform';
import { UpdatesStatusActions, UpdatesStatusActionsTypes } from '../actions/updates';

type State = {
  selectedPlatforms: Platform[],
};
const initialState: State = {
  selectedPlatforms: [],
};

export const updatesStatusReducer = (state: State = initialState, action: UpdatesStatusActions): State => {
  switch (action.type) {
    case UpdatesStatusActionsTypes.SetPlatforms:
      return { ...state, selectedPlatforms: action.payload.platforms };
    default:
      return state;
  }
};
