import { AppTheme } from '../types';
import { multicast, Subject } from 'rxjs';

export class AppThemeModel {
    private theme = new Subject<AppTheme>();
    public appTheme = this.theme.pipe(multicast(this.theme));

    public changeAppTheme(newTheme: AppTheme) {
        this.theme.next(newTheme);
    }
}
