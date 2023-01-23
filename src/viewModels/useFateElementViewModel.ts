// import { useMemo } from 'react';
// import { Subject } from 'rxjs';
import { appRollModel, useAppContext } from '../context';
import { DEFAULTS } from '../defaults';
import { calcSummaryRolls, rollFateDices } from '../services';
import { useStateWithObservableWithInit } from '../tools';

export const useFateElementViewModel = () => {
    const { translations } = useAppContext();
    // const translatedResultSource = useMemo(() => new Subject(), []);

    const currentMod = useStateWithObservableWithInit(appRollModel.rollModSource, DEFAULTS.MOD);

    const rollDie = () => {
        const rolls = rollFateDices();
        const summary = calcSummaryRolls(rolls, currentMod);

        // const displayRolls = translateFateRolls(rolls);

        // setDisplayRolls(displayRolls);
        // setResult(summary);
    };

    return {
        translations,
        rollDie,
    };
};
