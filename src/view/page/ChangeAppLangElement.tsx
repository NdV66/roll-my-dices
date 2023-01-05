import { Menu } from 'antd';
import { useChangeLangElementViewModel } from '../../viewModels/useChangeLangElementViewModel';

export const ChangeAppLangElement = () => {
    const { onClickItem, appLang, items } = useChangeLangElementViewModel();

    return (
        <>
            <Menu mode="horizontal" items={items} selectedKeys={[appLang]} onClick={onClickItem} />
        </>
    );
};
