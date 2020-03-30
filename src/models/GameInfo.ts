import { Platforms } from './Platforms';
import { Regions } from './Regions';

type Description = {
  language: string,
  title: string,
  synopsis: string, 
};

export type GameInfo = {
  uuid: string,
  serialNumber: string,
  descriptions: Description[],
  region: Regions,
  platform: Platforms
};
