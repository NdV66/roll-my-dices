import { DiceTypes, IDieRollFormatter, TFateRoll, TRoll, TRollExtended } from '../types';
import { prepareExtendedFateRoll, rollFateDices, summaryRolls } from '../services';

export class FateDieRollFormatter implements IDieRollFormatter<TRoll, TRollExtended> {
    public prepareExtendedRoll([roll, mod]: [TFateRoll | null, number | null]) {
        return prepareExtendedFateRoll(roll, mod) || null;
    }

    public prepareRollResult() {
        const rolls = rollFateDices();

        return {
            allRolls: rolls,
            dice: DiceTypes.FATE,
            roll: summaryRolls(rolls),
        };
    }
}
