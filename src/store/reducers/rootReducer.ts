import { combineReducers } from 'redux';

import { appInfoReducer } from './appInfoReducer';
import { appSettingsReducer } from './appSettingsReducer';
import { gameDetailsReducer } from './gameDetailsReducer';
import { gameSearchReducer } from './gameSearchReducer';
import { gameSearchResultsReducer } from './gameSearchResultsReducer';

export const rootReducer = combineReducers({
  appInfoReducer,
  appSettingsReducer,
  gameDetailsReducer,
  gameSearchReducer,
  gameSearchResultsReducer,
});
