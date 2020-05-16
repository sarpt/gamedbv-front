import { Description } from './description';
import { Region } from './region';
import { Platform } from './platform';

export type GameInfo = {
  uuid: string,
  serialNumber: string,
  descriptions: Description[],
  region: Region,
  platform: Platform,
};
