
import { AppState } from "../store";

export const selectAppSettingsStore = (store: AppState) => store.appSettingsReducer;
export const selectPrefferedLanguageCode = (store: AppState) => selectAppSettingsStore(store).prefferedLanguageCode;
