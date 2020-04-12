import { Description } from './Description';
import { Region } from './Region';
import { Platform } from './Platform';

export type GameInfo = {
  uuid: string,
  serialNumber: string,
  descriptions: Description[],
  region: Region,
  platform: Platform,
};
