import { useMemo } from 'react';
import { BehaviorSubject } from 'rxjs';
import { getModelByKey, useAppContext } from '../context';
import { DEFAULTS } from '../defaults';
import { AppExplodingRollModel } from '../models/AppExplodingRollModel';
import { AppFateRollModel } from '../models/AppFateRollModel';
import { AppRollModel } from '../models/AppRollModel';
import { useStateWithObservableWithInit } from '../tools';
import { MainContentTab, Models, TTabList } from '../types';

export const useMainContentViewModel = (tabList: TTabList[]) => {
    const _appFateRollModel = getModelByKey<AppFateRollModel>(Models.APP_FATE);
    const _appRollModel = getModelByKey<AppRollModel>(Models.APP_ROLL);
    const _appExplodingRollModel = getModelByKey<AppExplodingRollModel>(Models.APP_EXPLODING);
    const { theme, translations } = useAppContext();

    const translatedTabList = tabList.map((el) => ({ ...el, tab: translations[el.tab] }));
    const activeTabKeySource = useMemo(() => new BehaviorSubject<MainContentTab>(DEFAULTS.MAIN_CONTENT), []);

    const activeTabKey = useStateWithObservableWithInit<MainContentTab>(activeTabKeySource, DEFAULTS.MAIN_CONTENT);

    const setActiveTabKey = (tab: MainContentTab) => {
        activeTabKeySource.next(tab);

        _appRollModel.cleanAll();
        _appFateRollModel.cleanAll();
        _appExplodingRollModel.cleanAll();
    };

    return {
        theme,
        activeTabKey,
        setActiveTabKey,
        translatedTabList,
    };
};
