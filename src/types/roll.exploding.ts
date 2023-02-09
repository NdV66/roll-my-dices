import { TRoll, TRollExtended } from './roll';

export type TExplodingRoll = TRoll & {
    allRolls: number[];
    isExploding: boolean;
};

export type TExplodingRollExtended = TRollExtended & TExplodingRoll;
