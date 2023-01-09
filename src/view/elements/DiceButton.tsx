/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ROLL_FONT_NAME } from '../../styles/rollFont.style';
import { TTheme } from '../../types';

type Props = {
    onClick: () => void;
    displayValue: string;
    theme: TTheme;
};

export const DiceButton: React.FC<Props> = ({ onClick, displayValue, theme }) => {
    const themedStyles = styles(theme);

    return (
        <div onClick={onClick} css={themedStyles.rollButton} role="button">
            <span css={themedStyles.dice}>{displayValue}</span>
        </div>
    );
};

const size = 80;

const styles = (theme: TTheme) => ({
    rollButton: css`
        cursor: pointer;

        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;

        margin: ${theme.baseSpace}px ${2 * theme.baseSpace}px;
    `,
    dice: css`
        font-family: ${ROLL_FONT_NAME};
        font-size: ${3 * theme.fontSize}px;
        color: ${theme.accent};

        margin-right: -6px;

        &:hover {
            font-size: ${5 * theme.fontSize}px;
            transition: font-size 0.35s;
            color: ${theme.primary};
        }
    `,
});
