import { useAppContext } from '../context';

export const useFooterViewModel = () => {
    const { theme, translations } = useAppContext();

    return {
        translations,
        theme,
    };
};
