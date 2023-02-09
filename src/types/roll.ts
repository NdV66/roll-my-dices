export enum DiceTypes {
    D_4 = 'D_4',
    D_6 = 'D_6',
    D_8 = 'D_8',
    D_10 = 'D_10',
    D_12 = 'D_12',
    D_20 = 'D_20',
    FATE = 'FATE_6',
}

export type TRoll = {
    dice: DiceTypes;
    roll: number;
};

export type TRollExtended = TRoll & {
    calculationResult: number;
    mod: number;
};

export type TRollInfo = TRollExtended & {
    displayValue: string;
};
