import { Observable } from 'rxjs';
import { DiceTypes, TRollExtended } from './roll';

export interface IRollModel<E extends TRollExtended> {
    rollModSource: Observable<number>;
    extendedRollSource: Observable<E | null>;

    rollDice(diceType: DiceTypes): void;
    cleanAll(): void;
    updateRollMod(mod: number): void;
}
