import { LIGHT_THEME } from './styles/light.theme';
import { AppLangs, AppTheme, DiceTypes } from './types';

export const COOKIE_THEME_KEY = 'themeKey';

export const DEFAULTS = {
    APP_THEME: AppTheme.LIGHT,
    THEME: LIGHT_THEME,
    LANG: AppLangs.EN,
    LANGS_AMOUNT: 2,

    EMPTY_ROLL_RESULT: null,

    DICE_MIN: 1,
    DICE_NUMBER: 1,
    MOD: 0,

    SHOW_INPUT_MOD_ON_ENTER: false,

    STILL_IN_DEVELOPMENT: false,
    REPO_URL: 'https://github.com/NdV66/roll-my-dices',
};

export const DICE_TYPES_MAX = new Map([
    [DiceTypes.D_4, 4],
    [DiceTypes.D_6, 6],
    [DiceTypes.D_8, 8],
    [DiceTypes.D_10, 10],
    [DiceTypes.D_12, 12],
    [DiceTypes.D_20, 20],
]);

export const FONT_FAMILY_BY_DICE_TYPE = {
    [DiceTypes.D_4]: 'DiceD4',
    [DiceTypes.D_6]: 'DiceD6',
    [DiceTypes.D_8]: 'DiceD8',
    [DiceTypes.D_10]: 'DiceD10',
    [DiceTypes.D_12]: 'DiceD12',
    [DiceTypes.D_20]: 'DiceD20',
};

export const ROLLS_RESULTS_FONTS = {
    [DiceTypes.D_4]: ['!', '@', '#', '$'],
    [DiceTypes.D_6]: ['A', 'B', 'C', 'D', 'E', 'F'],
    [DiceTypes.D_8]: ['A', 'B ', 'C', 'D', 'E', 'F', 'G', 'H'],
    [DiceTypes.D_10]: ['A', 'B ', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
    [DiceTypes.D_12]: ['A', 'B ', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
    [DiceTypes.D_20]: [
        'A',
        'B ',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
    ],
};

export enum ERROR_CODES {
    'NO_DICE_FOUND' = 'No dice sign found',
}
