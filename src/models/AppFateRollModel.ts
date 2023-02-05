import { prepareExtendedFateRoll, rollFateDices, summaryRolls } from '../services';
import { DiceTypes, TFateRoll, TFateRollExtended } from '../types';

import { AbstractRollModel } from './AbstractRollModel';

export class AppFateRollModel extends AbstractRollModel<TFateRoll, TFateRollExtended> {
    constructor() {
        super();
        this._calcExtendedRollSubscribe();
    }

    protected prepareExtendedRoll = ([roll, mod]: [TFateRoll | null, number | null]) =>
        prepareExtendedFateRoll(roll, mod) || null;

    protected prepareRollResult = () => {
        const rolls = rollFateDices();

        return {
            allRolls: rolls,
            dice: DiceTypes.FATE,
            roll: summaryRolls(rolls),
        };
    };

    public rollDice = () => super.rollDice(DiceTypes.FATE);
}
