import { TColors, TTheme } from '../types';
import { COMMONS } from './commons';

//https://coolors.co/00072d-001c55-0a2472-0e6ba8-a6e1fa

const COLORS: TColors = {
    primary: '#A6E1FA',
    secondary: '#001C55',
    accent: '#0E6BA8',
    background: '#00072D',
};

export const DARK_THEME: TTheme = {
    ...COLORS,
    ...COMMONS,
};
