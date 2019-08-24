import { changeSearchQueryEpic } from './gameSearchEpic';
import { setGameIdEpic } from './gameDetailsEpic';
import { combineEpics } from 'redux-observable';

export const rootEpic = combineEpics(
    changeSearchQueryEpic,
    setGameIdEpic
);