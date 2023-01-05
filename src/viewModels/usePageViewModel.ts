import { useAppContext } from '../context';

export const usePageViewModel = () => {
    const { appTheme } = useAppContext();

    return {
        theme: '',
    };
};
