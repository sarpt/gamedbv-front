import { Action } from 'redux';
import { GameResult } from '../../models/GameResult';
import { RegionsMap } from '../../models/Regions';
import { PlatformsMap } from '../../models/Platforms';

export enum GameSearchTypes {
    SET_GAMES = '[game-search] Set Games',
    CHANGE_SEARCH_QUERY = '[game-search] Change search query'
}

export interface SetGamesAction extends Action {
    type: GameSearchTypes.SET_GAMES,
    payload: GameResult[]
}
export const setGames = (games: GameResult[]): SetGamesAction => {
    return {
        type: GameSearchTypes.SET_GAMES,
        payload: games
    };
};

type ChangeSearchQueryPayload = {
    searchQuery: string,
    searchedRegions: RegionsMap,
    searchedPlatforms: PlatformsMap,
    selectedGameResultsPage: number,
    gameResultsPerPage: number
};
export interface ChangeSearchQueryAction extends Action {
    type: GameSearchTypes.CHANGE_SEARCH_QUERY,
    payload: ChangeSearchQueryPayload 
}
export const changeSearchQuery = ({ searchQuery, searchedRegions, searchedPlatforms, selectedGameResultsPage, gameResultsPerPage }: ChangeSearchQueryPayload): ChangeSearchQueryAction => {
    return {
        type: GameSearchTypes.CHANGE_SEARCH_QUERY,
        payload: {
            searchQuery,
            searchedRegions,
            searchedPlatforms,
            selectedGameResultsPage,
            gameResultsPerPage
        }
    };
}

export type GameSearchActions = SetGamesAction | ChangeSearchQueryAction;