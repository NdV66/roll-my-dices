import { rollRandomBetween } from './rollRandomBetween.rolls.service';

export const rollDices = (number: number, min: number, max: number) => {
    const array = [...Array(number)];
    return array.map(() => rollRandomBetween(min, max));
};

//TODO: tests
export const summaryRolls = (rolls: number[]) => rolls.reduce((prev, current) => prev + current, 0);

//TODO: tests
export const calcSummaryRolls = (rolls: number[], mod?: string) => summaryRolls(rolls) + (mod ? parseInt(mod, 10) : 0);
