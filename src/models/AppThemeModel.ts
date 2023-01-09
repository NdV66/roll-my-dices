import { AppTheme } from '../types';
import { map, connect, Subject } from 'rxjs';

import { DARK_THEME, LIGHT_THEME } from '../styles';
import Cookies from 'js-cookie';
import { DEFAULTS } from '../defaults';

const COOKIE_THEME_KEY = 'themeKey';

const selectTheme = (theme: AppTheme) => (theme === AppTheme.DARK ? DARK_THEME : LIGHT_THEME);

export class AppThemeModel {
    private _appThemeSubject = new Subject<AppTheme>();
    public appTheme = this._appThemeSubject.pipe(connect(() => this._appThemeSubject));
    public theme = this.appTheme.pipe(map(selectTheme));

    constructor() {
        this._saveAppThemeInCookieOnChange();
    }

    private _saveAppThemeInCookieOnChange() {
        this.appTheme.subscribe((theme) => Cookies.set(COOKIE_THEME_KEY, theme, { sameSite: 'strict' }));
    }

    private _readFromCookie = () => {
        return Cookies.get(COOKIE_THEME_KEY) as AppTheme;
    };

    public setDefaultValue = () => {
        const savedTheme = this._readFromCookie();

        this.changeAppTheme(savedTheme || DEFAULTS.APP_THEME);
    };

    public changeAppTheme = (newTheme: AppTheme) => {
        this._appThemeSubject.next(newTheme);
    };
}
