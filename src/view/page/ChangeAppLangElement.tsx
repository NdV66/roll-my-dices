import { AppLangs } from '../../types';
import { useChangeLangElementViewModel } from '../../viewModels/useChangeLangElementViewModel';

export const ChangeAppLangElement = () => {
    const { translations, changeAppLang } = useChangeLangElementViewModel();

    return (
        <div>
            <button onClick={() => changeAppLang(AppLangs.PL)}>{translations.EN}</button>
        </div>
    );
};
