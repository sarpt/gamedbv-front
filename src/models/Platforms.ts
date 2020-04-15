export enum Platforms {
  NGC = 'ngc',
  WII = 'wii',
  PS3 = 'ps3',
  NDS = 'nds',
  N3DS = 'n3ds',
  SWITCH = 'switch',
}

export type PlatformsMap = { [K in Platforms]: boolean };
