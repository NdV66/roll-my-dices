import { useAppContext } from '../context';

export const usePageViewModel = () => {
    const { theme } = useAppContext();

    const preparedTheme = {
        token: {
            colorPrimary: theme.primary,
            colorBgBase: theme.background,
            fontSize: theme.fontSize,
            colorTextBase: theme.primary,
        },
    };

    return {
        theme: preparedTheme,
    };
};
