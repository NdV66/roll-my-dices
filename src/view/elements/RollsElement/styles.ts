/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { FONT_FAMILY_BY_DICE_TYPE } from '../../../defaults';
import { screenMd } from '../../../styles';
import { DiceTypes, TTheme } from '../../../types';

export const resultStyles = (theme: TTheme) => ({
    result: css`
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    rawRollResult: (diceType: DiceTypes) => css`
        user-select: none;

        font-family: ${FONT_FAMILY_BY_DICE_TYPE[diceType]};
        font-size: ${8 * theme.fontSize}px;
        color: ${theme.primary};

        ${screenMd(css`
            font-size: ${7 * theme.fontSize}px;
        `)}
    `,
});
