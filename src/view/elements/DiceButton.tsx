/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { FONT_FAMILY_BY_DICE_TYPE } from '../../defaults';
import { DiceTypes, TTheme } from '../../types';

type Props = {
    onClick: () => void;
    displayValue: string;
    theme: TTheme;
    diceType: DiceTypes;
};

export const DiceButton: React.FC<Props> = ({ onClick, displayValue, theme, diceType }) => {
    const themedStyles = styles(theme);

    return (
        <div onClick={onClick} css={themedStyles.rollButton} role="button">
            <span css={themedStyles.dice(diceType)}>{displayValue}</span>
        </div>
    );
};

const size = 80;

const styles = (theme: TTheme) => ({
    rollButton: css`
        user-select: none;
        cursor: pointer;

        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;

        margin: ${theme.baseSpace}px ${2 * theme.baseSpace}px;
    `,
    dice: (diceType: DiceTypes) => css`
        font-family: ${FONT_FAMILY_BY_DICE_TYPE[diceType]};
        font-size: ${5 * theme.fontSize}px;
        color: ${theme.accent};

        margin-right: -6px;
        user-select: none;

        &:hover {
            font-size: ${6 * theme.fontSize}px;
            transition: font-size 0.3s;
            color: ${theme.primary};
        }
    `,
});
