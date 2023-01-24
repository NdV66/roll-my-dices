import { DEFAULTS, FATE } from '../defaults';
import { FateDicesType, FateDiceType, FateLeader, TFateRoll } from '../types';
import { calcSummaryRolls, rollDices } from './rolls.service';

export const translateToFate = (roll: number): FateDiceType => {
    if (FATE.TRANSLATE_FOR_MINUS.includes(roll)) {
        return FATE.MINUS as FateDiceType;
    }
    if (FATE.TRANSLATE_FOR_NEUTRAL.includes(roll)) {
        return FATE.NEUTRAL as FateDiceType;
    }
    return FATE.PLUS as FateDiceType;
};

export const rollFateDices = (): FateDicesType => {
    const numberRolls = rollDices(FATE.DICE_NUMBERS, FATE.MIN, FATE.MAX);
    return numberRolls.map(translateToFate);
};

export const mapResultToLeader = (roll: number) => FATE.LEADER.get(roll) || FateLeader.NOT_FOUND;

export const prepareExtendedFateRoll = (roll: TFateRoll | null, mod: number | null) => {
    const modValue = mod || DEFAULTS.MOD;

    return (
        roll && {
            ...roll,
            calculationResult: calcSummaryRolls(roll.allRolls, modValue),
            mod: modValue,
        }
    );
};
