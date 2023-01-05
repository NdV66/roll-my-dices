import { AppLangs, TTranslations } from '../types';
import { BehaviorSubject, map } from 'rxjs';
import { LangManager } from '../langs/LangManager';
import { DEFAULTS } from '../defaults';

const getLangFromManager = (lang: AppLangs) => LangManager.getSingleton<TTranslations>(lang);

export class AppLangModel {
    public appLang = new BehaviorSubject<AppLangs>(DEFAULTS.LANG);
    public translations = this.appLang.pipe(map(getLangFromManager));

    public changeAppLang = (newLang: AppLangs) => {
        this.appLang.next(newLang);
    };
}
