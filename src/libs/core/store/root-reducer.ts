import { combineReducers } from 'redux';

import { availabilityStatusReducer } from '../../status/reducers/availability';
import { updatesStatusReducer } from '../../status/reducers/updates';
import { appSettingsReducer } from '../../settings/reducers';
import { gameDetailsReducer } from '../../games/reducers/details';
import { gameSearchReducer } from '../../games/reducers/search';
import { gameSearchResultsReducer } from '../../games/reducers/results';

export const rootReducer = combineReducers({
  availabilityStatusReducer,
  updatesStatusReducer,
  appSettingsReducer,
  gameDetailsReducer,
  gameSearchReducer,
  gameSearchResultsReducer,
});
