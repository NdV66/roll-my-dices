import { DiceTypes, IDieRollFormatter, TExplodingRoll, TExplodingRollExtended } from '../../types';
import { calcSummaryRolls, detectExploding, rollExplodingDice, summaryExplodingDie } from '../../services';
import { DEFAULTS, DICE_TYPES_MAX } from '../../defaults';

export class ExplodingDieRollFormatter implements IDieRollFormatter<TExplodingRoll, TExplodingRollExtended> {
    public prepareExtendedRoll(roll: TExplodingRoll | null, mod: number | null) {
        return roll
            ? {
                  ...roll,
                  calculationResult: calcSummaryRolls(roll?.allRolls.flat(), mod),
                  mod: mod || DEFAULTS.MOD,
              }
            : DEFAULTS.EMPTY_ROLL_RESULT;
    }

    public prepareRollResult(diceType: DiceTypes) {
        const diceNumber = 1;
        const max = DICE_TYPES_MAX.get(diceType)!;
        const rolls = rollExplodingDice(diceNumber, DEFAULTS.DICE_MIN, max);

        return {
            dice: diceType,
            roll: summaryExplodingDie(rolls),
            isExploding: detectExploding(diceNumber, rolls.flat()),
            allRolls: rolls,
        };
    }
}
