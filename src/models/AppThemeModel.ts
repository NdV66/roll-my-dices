import { AppTheme } from '../types';
import { BehaviorSubject } from 'rxjs';
import { DEFAULTS } from '../defaults';

export class AppThemeModel {
    private theme = new BehaviorSubject<AppTheme>(DEFAULTS.THEME);
    public appTheme = this.theme;

    public changeAppTheme = (newTheme: AppTheme) => {
        this.theme.next(newTheme);
    };
}
