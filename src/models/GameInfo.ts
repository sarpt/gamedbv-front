import { Platforms } from './Platforms';
import { Regions } from './Regions';

export type GameInfo = {
  id: string,
  name: string,
  description?: string,
  region: Regions,
  platform: Platforms
};
