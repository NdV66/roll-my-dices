/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { DEFAULTS, FONT_FAMILY_BY_DICE_TYPE } from '../../defaults';
import { screenMd } from '../../styles';
import { DiceTypes, TRollInfo, TTheme } from '../../types';
import { RollModCalculation } from './RollModCalculation';

type Props = TRollInfo & {
    theme: TTheme;
};

export const RollResult: React.FC<Props> = ({ theme, dice, mod, calculationResult, displayValue }) => {
    const themedStyles = styles(theme);

    return (
        <div css={themedStyles.result}>
            <div css={themedStyles.rawRollResult(dice)}>{displayValue}</div>
            {mod !== DEFAULTS.MOD && (
                <RollModCalculation mod={mod} calculationResult={calculationResult} theme={theme} />
            )}
        </div>
    );
};

const styles = (theme: TTheme) => ({
    result: css`
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    rawRollResult: (diceType: DiceTypes) => css`
        user-select: none;

        font-family: ${FONT_FAMILY_BY_DICE_TYPE[diceType]};
        font-size: ${9 * theme.fontSize}px;
        color: ${theme.primary};

        ${screenMd(css`
            font-size: ${7 * theme.fontSize}px;
        `)}
    `,
});
