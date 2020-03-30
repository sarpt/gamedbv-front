export enum Regions {
  NTSCU = 'NTSC-U',
  NTSCJ = 'NTSC-J',
  PAL = 'PAL',
  OTHER = 'other'
}

export type RegionsMap = { [K in Regions]: boolean }
