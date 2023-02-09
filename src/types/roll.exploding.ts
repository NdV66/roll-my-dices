import { TRoll, TRollExtended } from './roll';

export type TExplodingRoll = TRoll & {
    allRolls: Array<number[]>;
    isExploding: boolean;
};

export type TExplodingRollExtended = TRollExtended & TExplodingRoll;

export type TExplodingRollInfo = TExplodingRollExtended & {
    displayValues: string[];
};
