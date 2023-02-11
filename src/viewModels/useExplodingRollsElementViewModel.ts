import { useMemo } from 'react';
import { map } from 'rxjs';
import { getModelByKey, useAppContext } from '../context';
import { DEFAULTS } from '../defaults';
import { AppExplodingRollModel } from '../models/AppExplodingRollModel';
import { mapRollToDice, mapToRollButtonData } from '../services';
import { useStateWithObservableWithInit } from '../tools';
import { DiceTypes, Models, TExplodingRollExtended, TExplodingRollInfo } from '../types';

const prepareDisplayValue = (roll: TExplodingRollExtended) => ({
    ...roll,
    displayValues: roll.allRolls.flat().map((el) => mapRollToDice(roll.dice, el)),
});

//TODO tests
export const useExplodingRollsElementViewModel = (diceOrder: DiceTypes[]) => {
    const { translations, theme } = useAppContext();
    const _appRollExplodingModel = getModelByKey<AppExplodingRollModel>(Models.APP_EXPLODING);

    const rollInfoSource = useMemo(
        () => _appRollExplodingModel.extendedRollSource.pipe(map((el) => el && prepareDisplayValue(el))),
        [],
    );
    const rollInfo = useStateWithObservableWithInit<TExplodingRollInfo | null>(
        rollInfoSource,
        DEFAULTS.EMPTY_ROLL_RESULT,
    );

    const rollsElementData = mapToRollButtonData(diceOrder, _appRollExplodingModel);

    return {
        rollsElementData,
        rollInfo,
        theme,
        translations,
    };
};
