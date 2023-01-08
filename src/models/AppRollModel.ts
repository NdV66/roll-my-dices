import { DiceTypes } from '../types';
import { BehaviorSubject } from 'rxjs';
import { DEFAULTS } from '../defaults';

import { rollDices } from '../services';

const DICE_TYPES_MAX = new Map([
    [DiceTypes.D_4, 4],
    [DiceTypes.D_6, 6],
    [DiceTypes.D_8, 8],
    [DiceTypes.D_10, 10],
    [DiceTypes.D_12, 12],
    [DiceTypes.D_20, 20],
]);

export class AppRollModel {
    public rollSource = new BehaviorSubject<number | null>(DEFAULTS.EMPTY_ROLL_RESULT);

    public rollDice = (diceType: DiceTypes) => {
        const max = DICE_TYPES_MAX.get(diceType)!;
        const rolls = rollDices(DEFAULTS.DICE_NUMBER, DEFAULTS.DICE_MIN, max);
        this.rollSource.next(rolls[0]);
    };
}
