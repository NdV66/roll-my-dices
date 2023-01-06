export type TColors = {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
};

export type TCommonStyles = {
    fontSize: number;
    baseSpace: number;
};

export type TTheme = TColors & TCommonStyles;
