/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { TRollInfo, TTheme } from '../../types';

type Props = Pick<TRollInfo, 'calculationResult' | 'mod'> & {
    theme: TTheme;
};

export const RollModCalculation: React.FC<Props> = ({ mod, calculationResult, theme }) => {
    const themedStyles = styles(theme);

    return (
        <div css={themedStyles.wrapper}>
            + {mod} = <span css={themedStyles.result}>{calculationResult}</span>
        </div>
    );
};

const styles = (theme: TTheme) => ({
    wrapper: css`
        user-select: none;
        color: ${theme.primary};
        font-size: ${3 * theme.fontSize}px;

        display: flex;
        justify-content: center;
        align-items: center;
    `,
    result: css`
        font-weight: 700;
        font-size: ${4 * theme.fontSize}px;
        margin: 0 ${theme.baseSpace}px;
    `,
});
