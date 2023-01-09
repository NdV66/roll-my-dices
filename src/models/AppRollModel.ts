import { DiceTypes, TRoll, TRollExtended } from '../types';
import { BehaviorSubject, map, combineLatest } from 'rxjs';
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

const prepareExtendedRoll = ([roll, mod]: [TRoll | null, number | null]) =>
    roll && {
        ...roll,
        calculationResult: roll.roll + (mod || DEFAULTS.MOD),
        mod: mod || DEFAULTS.MOD,
    };

export class AppRollModel {
    private _rollSource = new BehaviorSubject<TRoll | null>(DEFAULTS.EMPTY_ROLL_RESULT);
    private _rollModSource = new BehaviorSubject<number | null>(DEFAULTS.EMPTY_ROLL_RESULT);

    public extendedRollSource = new BehaviorSubject<TRollExtended | null>(DEFAULTS.EMPTY_ROLL_RESULT);

    constructor() {
        this._calcExtendedRollSubscribe();
    }

    private _calcExtendedRollSubscribe() {
        combineLatest([this._rollSource, this._rollModSource])
            .pipe(map(prepareExtendedRoll))
            .subscribe((extendedRoll) => this.extendedRollSource.next(extendedRoll));
    }

    private _cleanRoll = () => {
        this._rollSource.next(DEFAULTS.EMPTY_ROLL_RESULT);
    };

    public rollDice = (diceType: DiceTypes) => {
        const max = DICE_TYPES_MAX.get(diceType)!;
        const rolls = rollDices(DEFAULTS.DICE_NUMBER, DEFAULTS.DICE_MIN, max);

        const result: TRoll = {
            dice: diceType,
            roll: rolls[0],
        };
        this._rollSource.next(result);
    };

    public updateRollMod = (mod: number) => {
        this._rollModSource.next(mod);
        this._cleanRoll();
    };

    static getMaxByDiceType(diceType: DiceTypes) {
        return DICE_TYPES_MAX.get(diceType)!;
    }
}
