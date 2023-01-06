import { appRollModel, useAppContext } from '../context';
import { DEFAULTS } from '../defaults';
import { useStateWithObservableWithInit } from '../tools';
import { DiceTypes } from '../types';

const DICES_ORDER = [DiceTypes.D_4, DiceTypes.D_6, DiceTypes.D_8, DiceTypes.D_10, DiceTypes.D_12, DiceTypes.D_20];

export const useRollsElementViewModel = () => {
    const { translations, theme } = useAppContext();

    const roll = useStateWithObservableWithInit<number>(appRollModel.rollSource, DEFAULTS.EMPTY_ROLL_RESULT);

    const onClickDice = (diceType: DiceTypes) => {
        appRollModel.rollDice(diceType);
    };

    const rollsElementData = DICES_ORDER.map((dice) => ({
        key: dice,
        roll: () => onClickDice(dice),
        title: translations[dice],
    }));

    return {
        roll,
        rollsElementData,
        theme,
    };
};
