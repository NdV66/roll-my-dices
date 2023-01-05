import { AppLangs } from '../types';
import { Subject } from 'rxjs';
import { LangManager } from '../langs/LangManager';

export class AppLangModel {
    private lang = new Subject<AppLangs>();
    public appLang = this.lang;

    public changeAppLang(newLang: AppLangs) {
        this.lang.next(newLang);
    }
}
