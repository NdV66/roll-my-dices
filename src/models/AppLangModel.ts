import { AppLangs, TTranslations } from '../types';
import { map, connect, Subject } from 'rxjs';
import { LangManager } from '../langs/LangManager';
import Cookies from 'js-cookie';

const COOKIE_LANG_KEY = 'langKey';
const getLangFromManager = (lang: AppLangs) => LangManager.getSingleton<TTranslations>(lang);

export class AppLangModel {
    private _appLangSubject = new Subject<AppLangs>();
    public appLang = this._appLangSubject.pipe(connect(() => this._appLangSubject));
    public translations = this._appLangSubject.pipe(map(getLangFromManager));

    constructor() {
        this.saveLangCookieOnChange();
    }

    private saveLangCookieOnChange() {
        this.appLang.subscribe((lang) => Cookies.set(COOKIE_LANG_KEY, lang));
    }

    private readFromCookie = () => {
        return Cookies.get(COOKIE_LANG_KEY) as AppLangs;
    };

    public setFromCookie = () => {
        const savedLang = this.readFromCookie();
        savedLang && this.changeAppLang(savedLang);
    };

    public changeAppLang = (newLang: AppLangs) => {
        this._appLangSubject.next(newLang);
    };
}
