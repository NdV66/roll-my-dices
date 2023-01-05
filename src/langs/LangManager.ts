import { GenericSingletonManager } from '../tools/GenericSingletonManager';
import { AppLangs } from '../types';
import { TEXTS_EN } from './en';
import { TEXTS_PL } from './pl';

const LANGS = {
    [AppLangs.EN]: TEXTS_EN,
    [AppLangs.PL]: TEXTS_PL,
};

export const LangManager = new GenericSingletonManager(LANGS);
