/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Card from 'antd/es/card/Card';
import { TTheme } from '../../types';
import { useMainContentViewModel } from '../../viewModels/useMainContentViewModel';
import { CleanEverythingButton } from './CleanEverytingButton';
import { ModInputElement } from './ModInputElement';
import { RollsElement } from './RollsElement';

export const MainContent: React.FC = () => {
    const { theme } = useMainContentViewModel();
    const themedStyles = styles(theme);

    return (
        <Card css={themedStyles.card}>
            <div css={themedStyles.modButton}>
                <ModInputElement />
            </div>

            <RollsElement />

            <div css={themedStyles.cleanEverythingButton}>
                <CleanEverythingButton />
            </div>
        </Card>
    );
};

const styles = (theme: TTheme) => ({
    cleanEverythingButton: css`
        padding-top: ${2 * theme.baseSpace}px;
        border-top: 1px solid ${theme.pageBackground};
    `,
    modButton: css`
        padding-bottom: ${2 * theme.baseSpace}px;
        border-bottom: 1px solid ${theme.pageBackground};
    `,
    card: css`
        .ant-card-head {
            color: ${theme.accent};
        }
    `,
});
