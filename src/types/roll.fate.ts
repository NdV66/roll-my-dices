import { TRoll, TRollExtended } from './roll';

export type TFateRoll = TRoll & {
    allRolls: number[];
};

export type TFateRollExtended = TRollExtended & TFateRoll;
