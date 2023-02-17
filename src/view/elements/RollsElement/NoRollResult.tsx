/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { QuestionOutlined } from '@ant-design/icons';
import { TTheme } from '../../../types';
import { TEST_IDS } from '../../../defaults';

type Props = {
    theme: TTheme;
};

export const NoRollResult: React.FC<Props> = ({ theme }) => {
    const themedStyles = styles(theme);

    return (
        <div css={themedStyles.wrapper} data-test-id={TEST_IDS.NO_ROLL_RESULT}>
            <QuestionOutlined />
        </div>
    );
};

const styles = (theme: TTheme) => ({
    wrapper: css`
        justify-content: center;
        display: flex;
        align-items: center;

        font-size: ${5 * theme.fontSize}px;
        color: ${theme.primary};
    `,
});
