import { combineReducers } from 'redux';

import { appInfoReducer } from '../libs/status/reducers';
import { appSettingsReducer } from '../libs/settings/reducers';
import { gameDetailsReducer } from '../libs/games/reducers/details';
import { gameSearchReducer } from '../libs/games/reducers/search';
import { gameSearchResultsReducer } from '../libs/games/reducers/results';

export const rootReducer = combineReducers({
  appInfoReducer,
  appSettingsReducer,
  gameDetailsReducer,
  gameSearchReducer,
  gameSearchResultsReducer,
});
