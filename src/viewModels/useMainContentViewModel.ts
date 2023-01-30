import { useMemo } from 'react';
import { BehaviorSubject } from 'rxjs';
import { getModelByKey, useAppContext } from '../context';
import { DEFAULTS } from '../defaults';
import { AppFateRollModel } from '../models/AppFateRollModel';
import { AppRollModel } from '../models/AppRollModel';
import { useStateWithObservableWithInit } from '../tools';
import { MainContentTab, Models, TabList } from '../types';

export const useMainContentViewModel = () => {
    const appFateRollModel = getModelByKey<AppFateRollModel>(Models.APP_FATE);
    const appRollModel = getModelByKey<AppRollModel>(Models.APP_ROLL);

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
