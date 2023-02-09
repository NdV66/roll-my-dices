import { TExplodingRoll, TExplodingRollExtended } from '../types';

import { AbstractRollModel } from './AbstractRollModel';
import { ExplodingDieRollFormatter } from './rolls';

export class AppExplodingRollModel extends AbstractRollModel<TExplodingRoll, TExplodingRollExtended> {
    constructor() {
        super(new ExplodingDieRollFormatter());
    }
}
