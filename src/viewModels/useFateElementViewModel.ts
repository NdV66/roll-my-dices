// import { useMemo } from 'react';
// import { Subject } from 'rxjs';
import { appFateRollModel, useAppContext } from '../context';
import { DEFAULTS } from '../defaults';
import { useStateWithObservableWithInit } from '../tools';

export const useFateElementViewModel = () => {
    const { translations } = useAppContext();
    const roll = useStateWithObservableWithInit(appFateRollModel.extendedRollSource, DEFAULTS.EMPTY_ROLL_RESULT);

    const rollDie = () => {
        appFateRollModel.rollDice();
    };

    return {
        translations,
        rollDie,
        roll,
    };
};
