import { AppTheme } from '../types';
import { share, Subject } from 'rxjs';

export class AppThemeModel {
    private theme = new Subject<AppTheme>();
    public appTheme = this.theme.pipe(share());

    public changeAppTheme(newTheme: AppTheme) {
        this.theme.next(newTheme);
    }
}
