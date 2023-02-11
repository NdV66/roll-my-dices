import {
    DICE_TYPES_MAX,
    NO_DICE_FOUND_ERROR,
    ROLLS_RESULTS_FONTS,
    USE_FATE_INSTEAD_ERROR,
    SPECIAL_MAX_DICE_VALUE,
} from '../defaults';
import { DiceTypes } from '../types';

const _getMaxByDiceType = (diceType: DiceTypes) => DICE_TYPES_MAX.get(diceType)!;

export const _mapRollToDice = (diceType: DiceTypes, rawResult: number): string => {
    const diceSet = ROLLS_RESULTS_FONTS[diceType];
    const index = rawResult - 1;

    if (index >= diceSet.length) {
        throw NO_DICE_FOUND_ERROR;
    }

    return diceSet[index];
};

export const mapMaxValueToDice = (diceType: DiceTypes): string => {
    const maxResult = _getMaxByDiceType(diceType);

    if (diceType === DiceTypes.FATE) {
        throw USE_FATE_INSTEAD_ERROR;
    }

    return SPECIAL_MAX_DICE_VALUE.get(diceType) || _mapRollToDice(diceType, maxResult);
};

export const mapRollToDice = (diceType: DiceTypes, rawResult: number): string => {
    if (diceType === DiceTypes.FATE) {
        throw USE_FATE_INSTEAD_ERROR;
    }

    return _mapRollToDice(diceType, rawResult);
};
