import { AppState } from '../../core/store/store';

export const selectUpdatesStore = (store: AppState) => store.updatesStatusReducer;
export const selectPlatformsToUpdate = (store: AppState) => selectUpdatesStore(store).selectedPlatforms;
export const selectPlatformsBeingUpdated = (store: AppState) => selectUpdatesStore(store).updatesInProgress;
export const platformsUpdateInProgress = (store: AppState) => selectPlatformsBeingUpdated(store).length !== 0;
