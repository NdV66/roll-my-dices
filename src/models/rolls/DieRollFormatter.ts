import { DiceTypes, IDieRollFormatter, TRoll, TRollExtended } from '../../types';
import { rollDices } from '../../services';
import { DEFAULTS, DICE_TYPES_MAX } from '../../defaults';

export class DieRollFormatter implements IDieRollFormatter<TRoll, TRollExtended> {
    public prepareExtendedRoll(roll: TRoll | null, mod: number | null) {
        return roll
            ? {
                  ...roll,
                  calculationResult: roll.roll + (mod || DEFAULTS.MOD),
                  mod: mod || DEFAULTS.MOD,
              }
            : DEFAULTS.EMPTY_ROLL_RESULT;
    }

    public prepareRollResult(diceType: DiceTypes) {
        const max = DICE_TYPES_MAX.get(diceType)!;
        const rolls = rollDices(DEFAULTS.DICE_NUMBER, DEFAULTS.DICE_MIN, max);

        return {
            dice: diceType,
            roll: rolls[0],
        };
    }
}
