import { FATE } from '../defaults';
import { FateDicesType, FateDiceType } from '../types';
import { rollDices } from './rolls.service';

//TODO: tests
export const translateToFate = (roll: number): FateDiceType => {
    if (FATE.TRANSLATE_FOR_MINUS.includes(roll)) {
        return FATE.MINUS as FateDiceType;
    }
    if (FATE.TRANSLATE_FOR_NEUTRAL.includes(roll)) {
        return FATE.NEUTRAL as FateDiceType;
    }
    return FATE.PLUS as FateDiceType;
};

//TODO: tests
export const rollFateDices = (): FateDicesType => {
    const numberRolls = rollDices(FATE.DICE_NUMBERS, FATE.MIN, FATE.MAX);
    return numberRolls.map(translateToFate);
};

//TODO: tests
const translateToFateChar = (roll: number) => {
    if (roll === FATE.MINUS) {
        return FATE.SIGNS.MINUS;
    } else if (roll === FATE.PLUS) {
        return FATE.SIGNS.PLUS;
    }
    return FATE.SIGNS.NEUTRAL;
};

//TODO: tests
export const translateFateRolls = (rolls: FateDicesType) => rolls.map(translateToFateChar);
