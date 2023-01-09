export enum DiceTypes {
    D_4 = 'D_4',
    D_6 = 'D_6',
    D_8 = 'D_8',
    D_10 = 'D_10',
    D_12 = 'D_12',
    D_20 = 'D_20',
}

export type TRoll = {
    dice: DiceTypes;
    roll: number;
};
