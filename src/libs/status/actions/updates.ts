
import { Action } from 'redux';
import { Platform } from '../../common/models/platform';

export enum UpdatesStatusActionsTypes {
  SetPlatforms = '[status-updates] Set platforms to update',
}

type setPlatformToUpdatePayload = {
  platforms: Platform[],
};
export interface SetPlatformsAction extends Action {
  type: UpdatesStatusActionsTypes.SetPlatforms;
  payload: setPlatformToUpdatePayload;
}

export const setPlatformsToUpdate = ({ platforms }: setPlatformToUpdatePayload) => {
  return {
    type: UpdatesStatusActionsTypes.SetPlatforms,
    payload: {
      platforms,
    },
  };
};

export type UpdatesStatusActions = SetPlatformsAction;
