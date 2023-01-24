import { AppTheme } from '../types';
import { map, connect, Subject } from 'rxjs';

import { DARK_THEME, LIGHT_THEME } from '../styles';
import { DEFAULTS, COOKIE_THEME_KEY } from '../defaults';
import { getFromCookies, setCookie } from '../services';

export const selectTheme = (theme: AppTheme) => (theme === AppTheme.DARK ? DARK_THEME : LIGHT_THEME);

export class AppThemeModel {
    private _appThemeSubject = new Subject<AppTheme>();

    public appTheme = this._appThemeSubject.pipe(connect(() => this._appThemeSubject));
    public theme = this.appTheme.pipe(map(selectTheme));

    constructor() {
        this._saveAppThemeInCookieOnChange();
    }

    private _saveAppThemeInCookieOnChange() {
        this.appTheme.subscribe((value) => setCookie(COOKIE_THEME_KEY, value));
    }

    public setDefaultValue = () => {
        const savedTheme = getFromCookies<AppTheme>(COOKIE_THEME_KEY);
        this.changeAppTheme(savedTheme || DEFAULTS.APP_THEME);
    };

    public changeAppTheme = (newTheme: AppTheme) => {
        this._appThemeSubject.next(newTheme);
    };
}
