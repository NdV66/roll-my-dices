import { MainContentTab, TTheme } from '../../types';
import { MainContentCardBodyTemplate } from '../elements';
import { ExplodingRollsElement } from './ExplodingRollsElement';
import { FateElement } from './FateElement';
import { RollsElement } from './RollsElement';

export const getContentList = (theme: TTheme, activeMainTab: MainContentTab): Record<string, React.ReactNode> => ({
    [MainContentTab.CLASSIC_D20]: (
        <MainContentCardBodyTemplate theme={theme} activeMainTab={activeMainTab}>
            <RollsElement />
        </MainContentCardBodyTemplate>
    ),
    [MainContentTab.EXPLODING]: (
        <MainContentCardBodyTemplate theme={theme} activeMainTab={activeMainTab}>
            <ExplodingRollsElement />
        </MainContentCardBodyTemplate>
    ),
    [MainContentTab.FATE]: (
        <MainContentCardBodyTemplate theme={theme} activeMainTab={activeMainTab}>
            <FateElement />
        </MainContentCardBodyTemplate>
    ),
});
