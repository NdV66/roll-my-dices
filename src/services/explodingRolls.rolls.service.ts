import { rollRandomBetween } from './rollRandomBetween.rolls.service';
import { summaryRolls } from './rolls.service';

export const detectExploding = (number: number, rolls: number[]) => rolls.length > number;

export const summaryExplodingDie = (rolls: Array<Array<number>>) => {
    const flatArray = rolls.flat();
    return summaryRolls(flatArray);
};

export const explodeDie = (min: number, max: number, results: number[]) => {
    const roll = rollRandomBetween(min, max);
    results.push(roll);

    if (roll === max) {
        explodeDie(min, max, results);
    }

    return results;
};

export const rollExplodingDice = (number: number, min: number, max: number) => {
    const rolls: Array<Array<number>> = [];

    for (let i = 0; i < number; i++) {
        const result = explodeDie(min, max, []);
        rolls.push(result);
    }

    return rolls;
};
