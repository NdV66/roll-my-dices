import { AppTheme } from '../types';
import { map, connect, Subject } from 'rxjs';

import { DARK_THEME, LIGHT_THEME } from '../styles';
import Cookies from 'js-cookie';

const COOKIE_THEME_KEY = 'themeKey';

const selectTheme = (theme: AppTheme) => (theme === AppTheme.DARK ? DARK_THEME : LIGHT_THEME);

export class AppThemeModel {
    private _appTheme = new Subject<AppTheme>();
    public appTheme = this._appTheme.pipe(connect(() => this._appTheme));
    public theme = this.appTheme.pipe(map(selectTheme));

    constructor() {
        this.saveInCookieOnChange();
    }

    private saveInCookieOnChange = () => {
        this.appTheme.subscribe((theme) => Cookies.set(COOKIE_THEME_KEY, theme));
    };

    private readFromCookie = () => {
        return Cookies.get(COOKIE_THEME_KEY) as AppTheme;
    };

    public setFromCookie = () => {
        const savedTheme = this.readFromCookie();
        savedTheme && this.changeAppTheme(savedTheme);
    };

    public changeAppTheme = (newTheme: AppTheme) => {
        this._appTheme.next(newTheme);
    };
}
