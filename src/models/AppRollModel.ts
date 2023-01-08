import { DiceTypes, TRoll } from '../types';
import { BehaviorSubject, distinctUntilChanged, map } from 'rxjs';
import { DEFAULTS } from '../defaults';

import { mapRollToDice, rollDices } from '../services';

const DICE_TYPES_MAX = new Map([
    [DiceTypes.D_4, 4],
    [DiceTypes.D_6, 6],
    [DiceTypes.D_8, 8],
    [DiceTypes.D_10, 10],
    [DiceTypes.D_12, 12],
    [DiceTypes.D_20, 20],
]);

export class AppRollModel {
    public rollSource = new BehaviorSubject<TRoll | null>(DEFAULTS.EMPTY_ROLL_RESULT);
    public rawRollDiceSource = this.rollSource.pipe(
        distinctUntilChanged(),
        map((el) => (el ? mapRollToDice(el.dice, el.roll) : null)),
    );

    public rollDice = (diceType: DiceTypes) => {
        const max = DICE_TYPES_MAX.get(diceType)!;
        const rolls = rollDices(DEFAULTS.DICE_NUMBER, DEFAULTS.DICE_MIN, max);

        const result: TRoll = {
            dice: diceType,
            roll: rolls[0],
        };
        this.rollSource.next(result);
    };

    static getMaxByDiceType(diceType: DiceTypes) {
        return DICE_TYPES_MAX.get(diceType)!;
    }
}
