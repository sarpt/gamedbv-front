import {
    GameSearchTypes,
    GameSearchActions,
} from '../actions/gameSearchActions';

import { GameResult } from '../../models/GameResult';
import { RegionsMap, Regions } from '../../models/Regions';
import { Platforms, PlatformsMap } from '../../models/Platforms';

const initialSelectedPage = 0;
const gamesPerPage = 10;

type State = {
    searchQuery: string,
    searchedRegions: RegionsMap,
    searchedPlatforms: PlatformsMap,
    gameResults: GameResult[],
    selectedGameResultsPage: number, 
    gameResultsPerPage: number
}
const initialState: State = {
    searchQuery: '',
    searchedRegions: {
        [Regions.NTSCJ]: true,
        [Regions.NTSCU]: true,
        [Regions.PAL]: true,
        [Regions.OTHER]: true
    },
    searchedPlatforms: {
        [Platforms.NGC]: true,
        [Platforms.WII]: true
    },
    gameResults: [],
    selectedGameResultsPage: initialSelectedPage,
    gameResultsPerPage: gamesPerPage
};

export const gameSearchReducer = (state: State = initialState, action: GameSearchActions): State => {
    switch (action.type) {
        case GameSearchTypes.SET_GAMES:
            return { ...state, gameResults: action.payload }
        case GameSearchTypes.CHANGE_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.payload.searchQuery,
                searchedRegions: action.payload.searchedRegions,
                searchedPlatforms: action.payload.searchedPlatforms,
                selectedGameResultsPage: action.payload.selectedGameResultsPage,
                gameResultsPerPage: action.payload.gameResultsPerPage
            };
        default:
            return state;
    }
};
