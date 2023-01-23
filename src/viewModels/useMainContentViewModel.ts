import { useMemo } from 'react';
import { BehaviorSubject } from 'rxjs';
import { appFateRollModel, appRollModel, useAppContext } from '../context';
import { DEFAULTS } from '../defaults';
import { useStateWithObservableWithInit } from '../tools';
import { MainContentTab, TabList } from '../types';

export const useMainContentViewModel = () => {
    const { theme, translations } = useAppContext();
    const translatedTabList = TabList.map((el) => ({ ...el, tab: translations[el.tab] }));
    const activeTabKeySource = useMemo(() => new BehaviorSubject<MainContentTab>(DEFAULTS.MAIN_CONTENT), []);

    const activeTabKey = useStateWithObservableWithInit<MainContentTab>(activeTabKeySource, DEFAULTS.MAIN_CONTENT);

    const setActiveTabKey = (tab: MainContentTab) => {
        activeTabKeySource.next(tab);

        appRollModel.cleanAll();
        appFateRollModel.cleanAll();
    };

    return {
        theme,
        activeTabKey,
        setActiveTabKey,
        translatedTabList,
    };
};
