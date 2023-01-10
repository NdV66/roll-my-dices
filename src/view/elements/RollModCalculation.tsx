/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { TRollInfo, TTheme } from '../../types';

type Props = Pick<TRollInfo, 'calculationResult' | 'mod'> & {
    theme: TTheme;
};

const detectSign = (value: number) => (value < 0 ? '-' : '+');

export const RollModCalculation: React.FC<Props> = ({ mod, calculationResult, theme }) => {
    const themedStyles = styles(theme);

    return (
        <div css={themedStyles.wrapper}>
            {detectSign(mod)} {Math.abs(mod)} = <span css={themedStyles.result}>{calculationResult}</span>
        </div>
    );
};

const styles = (theme: TTheme) => ({
    wrapper: css`
        user-select: none;
        color: ${theme.primary};
        font-size: ${3.5 * theme.fontSize}px;

        display: flex;
        justify-content: center;
        align-items: center;
    `,
    result: css`
        font-size: ${4 * theme.fontSize}px;
        font-weight: 700;
        margin: 0 ${theme.baseSpace}px;
    `,
});
