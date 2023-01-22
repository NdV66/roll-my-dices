import { rollRandomBetween } from './rollRandomBetween.rolls.service';

export const rollDices = (number: number, min: number, max: number) => {
    const array = [...Array(number)];
    return array.map(() => rollRandomBetween(min, max));
};
