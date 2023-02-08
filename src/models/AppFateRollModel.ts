import { DiceTypes, TFateRoll, TFateRollExtended } from '../types';

import { AbstractRollModel } from './AbstractRollModel';
import { FateDieRollFormatter } from './rolls';

export class AppFateRollModel extends AbstractRollModel<TFateRoll, TFateRollExtended> {
    constructor() {
        super(new FateDieRollFormatter());
    }

    public rollDice = () => {
        super.rollDice(DiceTypes.FATE);
    };
}
