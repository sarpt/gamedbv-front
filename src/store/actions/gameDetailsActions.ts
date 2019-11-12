import { Action } from 'redux';

export enum GameDetailsActionsTypes {
    SetGameId = '[game-details] Set game id'
}
export interface SetGameIdAction extends Action {
    type: GameDetailsActionsTypes.SetGameId,
    payload: string
}
export const setGameId = (gameId: string): SetGameIdAction => {
    return {
        type: GameDetailsActionsTypes.SetGameId,
        payload: gameId
    };
}

export type GameDetailsActions = SetGameIdAction;
