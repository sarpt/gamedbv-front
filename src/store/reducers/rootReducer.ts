import { combineReducers } from 'redux';

import { gameDetailsReducer } from './gameDetailsReducer';
import { gameSearchReducer } from './gameSearchReducer';
import { gameSearchResultsReducer } from './gameSearchResultsReducer';

export const rootReducer = combineReducers({
  gameDetailsReducer,
  gameSearchReducer,
  gameSearchResultsReducer
});
