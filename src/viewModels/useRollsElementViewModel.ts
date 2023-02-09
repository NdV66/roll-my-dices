import { useMemo } from 'react';
import { map } from 'rxjs';
import { getModelByKey, useAppContext } from '../context';
import { DEFAULTS } from '../defaults';
import { AppRollModel } from '../models/AppRollModel';
import { mapRollToDice } from '../services';
import { useStateWithObservableWithInit } from '../tools';
import { DiceTypes, Models, TRollExtended, TRollInfo } from '../types';
import { mapToRollButtonData } from './mapToRollButtonData';

const prepareDisplayValue = (roll: TRollExtended) => ({
    ...roll,
    displayValue: mapRollToDice(roll.dice, roll.roll),
});

export const useRollsElementViewModel = (diceOrder: DiceTypes[]) => {
    const { translations, theme } = useAppContext();
    const _appRollModel = getModelByKey<AppRollModel>(Models.APP_ROLL);
    const rollsElementData = mapToRollButtonData(diceOrder, _appRollModel);
    const rollInfoSource = useMemo(
        () => _appRollModel.extendedRollSource.pipe(map((el) => el && prepareDisplayValue(el))),
        [],
    );
    const rollInfo = useStateWithObservableWithInit<TRollInfo | null>(rollInfoSource, DEFAULTS.EMPTY_ROLL_RESULT);

    return {
        rollsElementData,
        rollInfo,
        theme,
        translations,
    };
};
