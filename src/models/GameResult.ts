import { Platforms } from './Platforms';
import { Regions } from './Regions';

export type GameResult = {
    id: string,
    name: string,
    description?: string,
    region: Regions,
    platform: Platforms 
};
