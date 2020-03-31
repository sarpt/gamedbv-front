import { Platforms } from './Platforms';
import { Regions } from './Regions';
import { Description } from './Description';

export type GameInfo = {
  uuid: string,
  serialNumber: string,
  descriptions: Description[],
  region: Regions,
  platform: Platforms
};
