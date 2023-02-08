import { DiceTypes, IDieRollFormatter, TFateRoll, TRoll, TRollExtended } from '../types';
import { calcSummaryRolls, rollFateDices, summaryRolls } from '../services';
import { DEFAULTS } from '../defaults';

export class FateDieRollFormatter implements IDieRollFormatter<TRoll, TRollExtended> {
    public prepareExtendedRoll(roll: TFateRoll | null, mod: number | null) {
        const modValue = mod || DEFAULTS.MOD;

        return roll
            ? {
                  ...roll,
                  calculationResult: calcSummaryRolls(roll?.allRolls, modValue),
                  mod: modValue,
              }
            : DEFAULTS.EMPTY_ROLL_RESULT;
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
