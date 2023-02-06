import { getModelByKey, useAppContext } from '../context';
import { DEFAULTS } from '../defaults';
import { AppFateRollModel } from '../models/AppFateRollModel';
import { useStateWithObservableWithInit } from '../tools';
import { Models } from '../types';

export const useFateElementViewModel = () => {
    const appFateRollModel = getModelByKey<AppFateRollModel>(Models.APP_FATE);

    const { translations, theme } = useAppContext();
    const roll = useStateWithObservableWithInit(appFateRollModel.extendedRollSource, DEFAULTS.EMPTY_ROLL_RESULT);

    return {
        translations,
        rollDie: appFateRollModel.rollDice,
        roll,
        theme,
    };
};
