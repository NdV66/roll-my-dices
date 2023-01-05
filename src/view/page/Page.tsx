import ConfigProvider from 'antd/es/config-provider';
import { usePageViewModel } from '../../viewModels/usePageViewModel';
import { ChangeAppLangElement } from './ChangeAppLangElement';
import { ThemeButtonElement } from './ThemeButtonElement';

export const Page = () => {
    const { theme } = usePageViewModel();

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: 'red',
                },
            }}
        >
            <div>
                <ThemeButtonElement />
                <ChangeAppLangElement />
            </div>
        </ConfigProvider>
    );
};
