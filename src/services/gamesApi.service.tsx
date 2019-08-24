import { ajax } from 'rxjs/ajax';

import { GameResult } from '../models/GameResult';
import { Platforms } from '../models/Platforms';
import { Regions } from '../models/Regions';

import { addQueriesToUrl } from '../functions/urlUtils';

type SearchGamesArguments = {
    searchQuery: string,
    page: number,
    gamesPerPage: number,
    regions: Regions[],
    platforms: Platforms[]
};
export function searchGames({ searchQuery, page, gamesPerPage, regions, platforms }: SearchGamesArguments) {
    let url = "http://localhost:3001/games";
    url = addQueriesToUrl(url, 'q', [searchQuery]);
    url = addQueriesToUrl(url, '_page', [page]);
    url = addQueriesToUrl(url, '_limit', [gamesPerPage]);
    url = addQueriesToUrl(url, 'platform', platforms);
    url = addQueriesToUrl(url, 'region', regions);

    const options: RequestInit = {
        method: 'GET'
    };

    return ajax.getJSON<GameResult[]>(url, options);
}

type GetGameArguments = {
    id: string
};
export function getGame({ id }: GetGameArguments) {
    const url = `http://localhost:3001/games/${id}`;
    const options: RequestInit = {
        method: 'GET'
    };

    return ajax.getJSON(url, options);
}