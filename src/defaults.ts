import { LIGHT_THEME } from './styles/light.theme';
import { AppLangs, AppTheme, DiceTypes, MainContentTab } from './types';

export const COOKIE_THEME_KEY = 'themeKey';
export const COOKIE_LANG_KEY = 'langKey';

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
    MAIN_CONTENT: MainContentTab.CLASSIC_D20, //TODO: for test only!

    REPO_URL: 'https://github.com/NdV66/roll-my-dices',
};

export const DICE_TYPES_MAX = new Map([
    [DiceTypes.FATE, 6],
    [DiceTypes.D_4, 4],
    [DiceTypes.D_6, 6],
    [DiceTypes.D_8, 8],
    [DiceTypes.D_10, 10],
    [DiceTypes.D_12, 12],
    [DiceTypes.D_20, 20],
]);

export const FONT_FAMILY_BY_DICE_TYPE = {
    [DiceTypes.FATE]: 'DiceD6',
    [DiceTypes.D_4]: 'DiceD4',
    [DiceTypes.D_6]: 'DiceD6',
    [DiceTypes.D_8]: 'DiceD8',
    [DiceTypes.D_10]: 'DiceD10',
    [DiceTypes.D_12]: 'DiceD12',
    [DiceTypes.D_20]: 'DiceD20',
};

export const ROLLS_RESULTS_FONTS = {
    [DiceTypes.FATE]: [],
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

export const FATE = {
    PLUS: 1,
    MINUS: -1,
    NEUTRAL: 0,

    DICE_NUMBERS: 4,

    TRANSLATE_FOR_MINUS: [1, 2],
    TRANSLATE_FOR_NEUTRAL: [3, 4],
    TRANSLATE_FOR_PLUS: [5, 6],

    MIN: 1,
    MAX: 6,

    SIGNS: {
        PLUS: '+',
        MINUS: '-',
        NEUTRAL: '',
    },
};
