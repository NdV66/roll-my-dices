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
        <Card
            actions={[<CleanEverythingButton key="cleanEverythingButton" />]}
            title={<ModInputElement />}
            css={themedStyles.actions}
        >
            <RollsElement />
        </Card>
    );
};

const styles = (theme: TTheme) => ({
    actions: css`
        .ant-card-actions {
            padding: ${theme.baseSpace}px 24px;
        }
    `,
});
