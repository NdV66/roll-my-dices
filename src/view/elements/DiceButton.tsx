/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { FONT_FAMILY_BY_DICE_TYPE, TEST_IDS } from '../../defaults';
import { screenMd } from '../../styles';
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
        <div onClick={onClick} css={themedStyles.rollButton} role="button" data-test-id={TEST_IDS.DICE_BUTTON}>
            <span css={themedStyles.dice(diceType)}>{displayValue}</span>
        </div>
    );
};

const styles = (theme: TTheme) => ({
    rollButton: css`
        user-select: none;
        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;

        margin: ${4 * theme.baseSpace}px;

        width: 60px;
        height: 60px;

        ${screenMd(css`
            margin: ${2 * theme.baseSpace}px;
        `)}
    `,
    dice: (diceType: DiceTypes) => css`
        font-family: ${FONT_FAMILY_BY_DICE_TYPE[diceType]};
        font-size: ${4.5 * theme.fontSize}px;
        color: ${theme.primary};

        margin-right: -6px;
        user-select: none;

        &:hover {
            font-size: ${6 * theme.fontSize}px;
            transition: font-size 0.3s;
        }

        ${screenMd(css`
            font-size: ${4 * theme.fontSize}px;

            &:hover {
                font-size: ${5 * theme.fontSize}px;
            }
        `)}
    `,
});
