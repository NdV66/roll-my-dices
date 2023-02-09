import { DEFAULTS } from '../defaults';
import { rollRandomBetween } from './rollRandomBetween.rolls.service';

export const rollDices = (number: number, min: number, max: number) => {
    const array = [...Array(number)];
    return array.map(() => rollRandomBetween(min, max));
};

export const summaryRolls = (rolls: number[]) => rolls.reduce((prev, current) => prev + current, 0);

export const calcSummaryRolls = (rolls: number[], mod: number | null) => summaryRolls(rolls) + (mod || DEFAULTS.MOD);
