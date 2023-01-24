import { prepareExtendedFateRoll, rollFateDices, summaryRolls } from '../services';
import { DiceTypes, TFateRoll, TFateRollExtended } from '../types';

import { AbstractRollModel } from './AbstractRollModel';

export class AppFateRollModel extends AbstractRollModel<TFateRoll, TFateRollExtended> {
    protected prepareExtendedRoll([roll, mod]: [TFateRoll | null, number | null]): TFateRollExtended | null {
        return prepareExtendedFateRoll(roll, mod);
    }

    protected prepareRollResult = () => {
        const rolls = rollFateDices();

        return {
            allRolls: rolls,
            dice: DiceTypes.FATE,
            roll: summaryRolls(rolls),
        };
    };

    public rollDice(): void {
        super.rollDice(DiceTypes.FATE);
    }
}
