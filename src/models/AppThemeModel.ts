import { AppTheme } from '../types';
import { BehaviorSubject, map } from 'rxjs';
import { DEFAULTS } from '../defaults';
import { DARK_THEME, LIGHT_THEME } from '../styles';

const selectTheme = (theme: AppTheme) => (theme === AppTheme.DARK ? DARK_THEME : LIGHT_THEME);

export class AppThemeModel {
    public appTheme = new BehaviorSubject<AppTheme>(DEFAULTS.APP_THEME);
    public theme = this.appTheme.pipe(map(selectTheme));

    public changeAppTheme = (newTheme: AppTheme) => {
        this.appTheme.next(newTheme);
    };
}
