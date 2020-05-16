import { combineReducers } from 'redux';

import { appInfoReducer } from './reducers/appInfoReducer';
import { appSettingsReducer } from './reducers/appSettingsReducer';
import { gameDetailsReducer } from './reducers/gameDetailsReducer';
import { gameSearchReducer } from '../libs/games/reducers/search';
import { gameSearchResultsReducer } from '../libs/games/reducers/results';

export const rootReducer = combineReducers({
  appInfoReducer,
  appSettingsReducer,
  gameDetailsReducer,
  gameSearchReducer,
  gameSearchResultsReducer,
});
