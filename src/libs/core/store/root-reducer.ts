import { combineReducers } from 'redux';

import { appStatusReducer } from '../../status/reducers';
import { appSettingsReducer } from '../../settings/reducers';
import { gameDetailsReducer } from '../../games/reducers/details';
import { gameSearchReducer } from '../../games/reducers/search';
import { gameSearchResultsReducer } from '../../games/reducers/results';

export const rootReducer = combineReducers({
  appInfoReducer: appStatusReducer,
  appSettingsReducer,
  gameDetailsReducer,
  gameSearchReducer,
  gameSearchResultsReducer,
});