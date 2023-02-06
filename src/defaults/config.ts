import { LIGHT_THEME } from '../styles/light.theme';
import { AppLangs, AppTheme, DiceTypes, MainContentTab, TTabList } from '../types';

export const DEFAULTS = {
    APP_THEME: AppTheme.LIGHT,
    THEME: LIGHT_THEME,
    LANG: AppLangs.EN,
    LANGS_AMOUNT: 2,

    EMPTY_ROLL_RESULT: null,
    EMPTY_MOD: '',

    DICE_MIN: 1,
    DICE_NUMBER: 1,
    MOD: 0,

    SHOW_INPUT_MOD_ON_ENTER: false,
    SHOW_FATE_LEADER_ON_ENTER: false,
    MAIN_CONTENT: MainContentTab.CLASSIC_D20,

    REPO_URL: 'https://github.com/NdV66/roll-my-dices',
};

export const TAB_LISTS: TTabList[] = [
    {
        key: MainContentTab.CLASSIC_D20,
        tab: 'CLASSIC_D20_TAB',
    },
    {
        key: MainContentTab.FATE,
        tab: 'FATE_TAB',
    },
];

export const DICES_ORDER = [
    DiceTypes.D_4,
    DiceTypes.D_6,
    DiceTypes.D_8,
    DiceTypes.D_10,
    DiceTypes.D_12,
    DiceTypes.D_20,
];
