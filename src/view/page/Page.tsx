import { ThemeButton } from '../elements';
import { useAppContext } from '../../context';

export const Page = () => {
    const appContext = useAppContext();

    const onChangeTheme = () => {
        appContext.toggleAppTheme();
    };

    return (
        <div>
            <ThemeButton onClick={onChangeTheme} theme={appContext.appTheme} />
        </div>
    );
};
