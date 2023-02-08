import { TRoll, TRollExtended } from '../types';
import { AbstractRollModel } from './AbstractRollModel';
import { DieRollFormatter } from './rolls';

export class AppRollModel extends AbstractRollModel<TRoll, TRollExtended> {
    constructor() {
        super(new DieRollFormatter());
    }
}
