import { AppState } from '../../core/store/store';

export const selectUpdatesStore = (store: AppState) => store.updatesStatusReducer;
export const selectPlatformsToUpdate = (store: AppState) => selectUpdatesStore(store).selectedPlatforms;
