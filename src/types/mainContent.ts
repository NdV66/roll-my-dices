export enum MainContentTab {
    CLASSIC_D20 = 'classic',
    FATE = 'fate',
    EXPLODING = 'exploding',
}

export type TTabList = {
    key: MainContentTab;
    tab: string;
};
