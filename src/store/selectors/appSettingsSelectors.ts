
import { AppState } from "../store";

export const selectAppSettingsStore = (store: AppState) => store.appSettingsReducer;
export const selectPrefferedLanguage = (store: AppState) => selectAppSettingsStore(store).prefferedLanguage;
