import { DiceTypes, IDieRollFormatter, IRollModel, TRoll, TRollExtended } from '../types';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { DEFAULTS, DICE_TYPES_MAX } from '../defaults';

export abstract class AbstractRollModel<R extends TRoll, E extends TRollExtended> implements IRollModel<E> {
    protected _rollSource = new BehaviorSubject<R | null>(DEFAULTS.EMPTY_ROLL_RESULT);
    private _rollModSource = new BehaviorSubject<number>(DEFAULTS.MOD);
    private _extendedRollSource = new BehaviorSubject<E | null>(DEFAULTS.EMPTY_ROLL_RESULT);

    get rollModSource() {
        return this._rollModSource.asObservable();
    }

    get extendedRollSource() {
        return this._extendedRollSource.asObservable();
    }

    constructor(private _dieRollFormatter: IDieRollFormatter<R, E>) {
        this._calcExtendedRollSubscribe();
    }

    private _mapToExtended(roll?: [R | null, number]) {
        return roll ? this._dieRollFormatter.prepareExtendedRoll(roll[0], roll[1]) : DEFAULTS.EMPTY_ROLL_RESULT;
    }

    protected _calcExtendedRollSubscribe() {
        combineLatest([this._rollSource, this._rollModSource])
            .pipe(map((roll) => this._mapToExtended(roll)))
            .subscribe((extendedRoll) => this._extendedRollSource.next(extendedRoll));
    }

    public rollDice(diceType: DiceTypes) {
        const result = this._dieRollFormatter.prepareRollResult(diceType);
        this._rollSource.next(result);
    }

    public cleanAll = () => {
        this._rollSource.next(DEFAULTS.EMPTY_ROLL_RESULT);
        this._rollModSource.next(DEFAULTS.MOD);
    };

    public updateRollMod = (mod: number) => {
        this._rollModSource.next(mod);
    };

    static getMaxByDiceType(diceType: DiceTypes) {
        return DICE_TYPES_MAX.get(diceType)!;
    }
}
