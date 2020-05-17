
import { AppState } from "../../core/store/store";

export const selectAppInfoStore = (store: AppState) => store.appInfoReducer;
export const selectAvailableLanguages = (store: AppState) => selectAppInfoStore(store).availableLanguages;
export const selectAvailableRegions = (store: AppState) => selectAppInfoStore(store).availableRegions;
export const selectPlatforms = (store: AppState) => selectAppInfoStore(store).platforms;
export const selectAvailablePlatforms = (store: AppState) => selectAppInfoStore(store).platforms.filter(platform => platform.indexed);
