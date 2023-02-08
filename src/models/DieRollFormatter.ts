import { DiceTypes, IDieRollFormatter, TRoll, TRollExtended } from '../types';
import { prepareExtendedRoll, rollDices } from '../services';
import { DEFAULTS, DICE_TYPES_MAX } from '../defaults';

export class DieRollFormatter implements IDieRollFormatter<TRoll, TRollExtended> {
    public prepareExtendedRoll([roll, mod]: [TRoll | null, number | null]) {
        return prepareExtendedRoll(roll, mod);
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
