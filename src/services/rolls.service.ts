export const rollRandomBetween = (min: number, max: number) => Math.floor(Math.random() * max) + min;

export const rollDices = (number: number, min: number, max: number) => {
    const array = [...Array(number)];
    return array.map(() => rollRandomBetween(min, max));
};
