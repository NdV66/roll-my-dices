import { DiceTypes, IDieRollFormatter, TExplodingRoll, TRoll, TRollExtended } from '../../types';
import { detectExploding, rollDices } from '../../services';
import { DEFAULTS, DICE_TYPES_MAX } from '../../defaults';

export class ExplodingDieRollFormatter implements IDieRollFormatter<TExplodingRoll, TRollExtended> {
    //TODO
    public prepareExtendedRoll(roll: TRoll | null, mod: number | null) {
        return roll
            ? {
                  ...roll,
                  calculationResult: roll.roll + (mod || DEFAULTS.MOD),
                  mod: mod || DEFAULTS.MOD,
              }
            : DEFAULTS.EMPTY_ROLL_RESULT;
    }

    //TODO
    public prepareRollResult(diceType: DiceTypes) {
        const max = DICE_TYPES_MAX.get(diceType)!;
        const rolls = rollDices(1, DEFAULTS.DICE_MIN, max);

        return {
            dice: diceType,
            roll: 0,
            isExploding: detectExploding(1, rolls),
            allRolls: [],
        };
    }
}
