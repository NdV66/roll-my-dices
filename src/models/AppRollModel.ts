import { DiceTypes, TRoll, TRollExtended } from '../types';
import { DEFAULTS, DICE_TYPES_MAX } from '../defaults';
import { prepareExtendedRoll, rollDices } from '../services';
import { AbstractRollModel } from './AbstractRollModel';

export class AppRollModel extends AbstractRollModel<TRoll, TRollExtended> {
    protected prepareExtendedRoll([roll, mod]: [TRoll | null, number | null]): TRollExtended | null {
        return prepareExtendedRoll(roll, mod);
    }

    public rollDice = (diceType: DiceTypes) => {
        const max = DICE_TYPES_MAX.get(diceType)!;
        const rolls = rollDices(DEFAULTS.DICE_NUMBER, DEFAULTS.DICE_MIN, max);

        const result: TRoll = {
            dice: diceType,
            roll: rolls[0],
        };

        this._rollSource.next(result);
    };
}
