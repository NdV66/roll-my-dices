import { AppTheme } from '../types';
import { Subject } from 'rxjs';

export class AppThemeModel {
    private theme = new Subject<AppTheme>();
    public appTheme = this.theme;

    public changeAppTheme(newTheme: AppTheme) {
        this.theme.next(newTheme);
    }
}
