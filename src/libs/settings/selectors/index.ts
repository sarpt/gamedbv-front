
import { AppState } from '../../core/store/store';

export const selectAppSettingsStore = (store: AppState) => store.appSettingsReducer;
export const selectPrefferedLanguageCode = (store: AppState) => selectAppSettingsStore(store).prefferedLanguageCode;
export const selectShowOnlyAvailablePlatforms = (store: AppState) => selectAppSettingsStore(store).showOnlyAvailablePlatforms;
