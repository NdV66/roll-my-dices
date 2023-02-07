import { DEFAULTS, FATE, NO_DICE_FOUND_ERROR, ROLLS_RESULTS_FONTS } from '../defaults';
import {
    DiceTypes,
    FateDicesType,
    FateDiceType,
    FateLeader,
    TFateRoll,
    TTranslateLeaderData,
    TTranslations,
} from '../types';
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

export const mapResultToLeader = (roll?: number) => {
    if (roll !== undefined) {
        return FATE.LEADER.get(roll) || FateLeader.NOT_FOUND;
    }
    return FateLeader.NOT_FOUND;
};

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

export const mapFateToDice = (rawResult: number) => {
    const diceSet = ROLLS_RESULTS_FONTS[DiceTypes.FATE];
    const index = rawResult + 1;

    if (index >= diceSet.length) {
        throw NO_DICE_FOUND_ERROR;
    }

    return diceSet[index];
};

//TODO tests
export const translateToFateLeader = (translations: TTranslations, value?: FateLeader) =>
    translations.FATE_LEADER[value || FateLeader.NOT_FOUND];

export const translateLeaderData = (translations: TTranslations, leader: Map<number, FateLeader>) => {
    const results: TTranslateLeaderData[] = [];

    leader.forEach((value: FateLeader, key: number) =>
        results.push({
            value: key,
            name: translateToFateLeader(translations, value),
            key: leader.get(key)!,
        }),
    );

    return results;
};
