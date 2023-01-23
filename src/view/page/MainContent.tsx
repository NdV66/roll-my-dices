/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Card from 'antd/es/card/Card';
import { MainContentTab, TTheme } from '../../types';
import { useMainContentViewModel } from '../../viewModels/useMainContentViewModel';
import { MainContentCardBodyTemplate } from '../elements';
import { FateElement } from './FateElement';
import { RollsElement } from './RollsElement';

const getContentList = (theme: TTheme): Record<string, React.ReactNode> => ({
    [MainContentTab.CLASSIC_D20]: (
        <MainContentCardBodyTemplate theme={theme}>
            <RollsElement />
        </MainContentCardBodyTemplate>
    ),
    [MainContentTab.FATE]: (
        <MainContentCardBodyTemplate theme={theme}>
            <FateElement />
        </MainContentCardBodyTemplate>
    ),
});

export const MainContent: React.FC = () => {
    const { theme, activeTabKey, setActiveTabKey, translatedTabList } = useMainContentViewModel();
    const themedStyles = styles(theme);
    const contentList = getContentList(theme);

    return (
        <Card
            css={themedStyles.card}
            tabList={translatedTabList as any}
            onTabChange={(key) => setActiveTabKey(key as MainContentTab)}
            activeTabKey={activeTabKey}
        >
            {contentList[activeTabKey]}
        </Card>
    );
};

const styles = (theme: TTheme) => ({
    card: css`
        .ant-card-head {
            color: ${theme.accent};
        }

        .ant-tabs-tab-btn {
            font-size: ${theme.smallFontSize}px;
        }

        .ant-card-head {
            border-bottom: none;
        }
    `,
});
