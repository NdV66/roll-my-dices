import { DiceTypes, TRoll, TRollExtended } from '../types';
import { BehaviorSubject, map, combineLatest } from 'rxjs';
import { DEFAULTS, DICE_TYPES_MAX } from '../defaults';

export abstract class AbstractRollModel<R extends TRoll, E extends TRollExtended> {
    protected _rollSource = new BehaviorSubject<R | null>(DEFAULTS.EMPTY_ROLL_RESULT);
    public rollModSource = new BehaviorSubject<number>(DEFAULTS.MOD);
    public extendedRollSource = new BehaviorSubject<E | null>(DEFAULTS.EMPTY_ROLL_RESULT);

    constructor() {
        this._calcExtendedRollSubscribe();
    }

    abstract rollDice(diceType: DiceTypes): void;
    protected abstract prepareExtendedRoll([roll, mod]: [R | null, number | null]): E | null;

    private _calcExtendedRollSubscribe() {
        combineLatest([this._rollSource, this.rollModSource])
            .pipe(map(this.prepareExtendedRoll))
            .subscribe((extendedRoll) => this.extendedRollSource.next(extendedRoll));
    }

    public cleanAll = () => {
        this._rollSource.next(DEFAULTS.EMPTY_ROLL_RESULT);
        this.rollModSource.next(DEFAULTS.MOD);
    };

    public updateRollMod = (mod: number) => {
        this.rollModSource.next(mod);
    };

    static getMaxByDiceType(diceType: DiceTypes) {
        return DICE_TYPES_MAX.get(diceType)!;
    }
}
