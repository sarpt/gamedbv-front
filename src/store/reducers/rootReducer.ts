import { combineReducers } from 'redux';

import { gameDetailsReducer } from './gameDetailsReducer';
import { gameSearchReducer } from './gameSearchReducer';

export const rootReducer = combineReducers({
    gameDetailsReducer,
    gameSearchReducer
});