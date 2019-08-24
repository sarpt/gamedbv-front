export enum Platforms {
    NGC = 'ngc',
    WII = 'wii'
}

export type PlatformsMap = { [K in Platforms]: boolean }