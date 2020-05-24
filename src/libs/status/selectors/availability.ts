import { AppState } from '../../core/store/store';

export const selectAvailabilityStore = (store: AppState) => store.availabilityStatusReducer;
export const selectAvailableLanguages = (store: AppState) => selectAvailabilityStore(store).availableLanguages;
export const selectAvailableRegions = (store: AppState) => selectAvailabilityStore(store).availableRegions;
export const selectPlatforms = (store: AppState) => selectAvailabilityStore(store).platforms;
export const selectAvailablePlatforms = (store: AppState) => selectAvailabilityStore(store).platforms.filter(platform => platform.indexed);
