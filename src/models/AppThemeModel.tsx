import { AppTheme } from '../types';
import { Subject } from 'rxjs';

export class AppThemeModel {
    public theme = new Subject<AppTheme>();

    public changeAppTheme(newTheme: AppTheme) {
        this.theme.next(newTheme);
    }
}
