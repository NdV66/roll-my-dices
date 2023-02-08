import { FATE, NO_DICE_FOUND_ERROR, ROLLS_RESULTS_FONTS } from '../defaults';
import { DiceTypes, FateDicesType, FateDiceType, FateLeader, TTranslateLeaderData, TTranslations } from '../types';
import { rollDices } from './rolls.service';

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

export const mapFateToDice = (rawResult: number) => {
    const diceSet = ROLLS_RESULTS_FONTS[DiceTypes.FATE];
    const index = rawResult + 1;

    if (index >= diceSet.length) {
        throw NO_DICE_FOUND_ERROR;
    }

    return diceSet[index];
};

export const translateLeaderData = (translations: TTranslations, leader: Map<number, FateLeader>) => {
    const results: TTranslateLeaderData[] = [];

    leader.forEach((value: FateLeader, key: number) =>
        results.push({
            value: key,
            name: translations.FATE_LEADER[value || FateLeader.NOT_FOUND],
            key: leader.get(key)!,
        }),
    );

    return results;
};
