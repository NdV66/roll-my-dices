import { DiceTypes, TRoll, TRollExtended } from './roll';

export interface IDieRollFormatter<R extends TRoll, E extends TRollExtended> {
    prepareRollResult(diceType: DiceTypes): R;
    prepareExtendedRoll(roll: TRoll | null, mod: number | null): E | null;
}
