export enum Regions {
    NTSCU = 'ntscu',
    NTSCJ = 'ntscj',
    PAL = 'pal',
    OTHER = 'other'
}

export type RegionsMap = { [K in Regions]: boolean }
