import { TColors, TTheme } from '../types';
import { COMMONS } from './commons';

const COLORS: TColors = {
    accent: '#55727A3',
    primary: '#D6C5F0',
    pageBackground: '#00091e',
    background: '#001033',
};

export const DARK_THEME: TTheme = {
    ...COLORS,
    ...COMMONS,
};
