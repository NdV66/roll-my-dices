import { Button } from 'antd';
import { AppLangs } from '../../types';
import { useChangeLangElementViewModel } from '../../viewModels/useChangeLangElementViewModel';

export const ChangeAppLangElement = () => {
    const { translations, changeAppLang } = useChangeLangElementViewModel();

    return (
        <div>
            <Button onClick={() => changeAppLang(AppLangs.PL)}>{translations.CURRENT_LANG}</Button>
        </div>
    );
};
