export type FateDiceType = -1 | 0 | 1;

export type FateDicesType = FateDiceType[];

export enum FateLadder {
    LEGENDARY = 'LEGENDARY',
    EPIC = 'EPIC',
    FANTASTIC = 'FANTASTIC',
    SUPERB = 'SUPERB',
    GREAT = 'GREAT',
    GOOD = 'GOOD',
    FAIR = 'FAIR',
    AVERAGE = 'AVERAGE',
    MEDIOCRE = 'MEDIOCRE',
    POOR = 'POOR',
    TERRIBLE = 'TERRIBLE',
    NOT_FOUND = 'NOT_FOUND',
}

export type TTranslateLadderData = {
    value: number;
    name: string;
    key: string;
};

export type TTranslateLadderColumn = {
    title: string;
    dataIndex: string;
    key: string;
};
