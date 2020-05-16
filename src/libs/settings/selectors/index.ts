
import { AppState } from "../../core/store/store";

export const selectAppSettingsStore = (store: AppState) => store.appSettingsReducer;
export const selectPrefferedLanguageCode = (store: AppState) => selectAppSettingsStore(store).prefferedLanguageCode;
