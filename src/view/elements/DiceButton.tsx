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

        margin: ${theme.baseSpace}px ${3 * theme.baseSpace}px;
        color: ${theme.accent};

        &:hover {
            background: ${theme.accent};
            color: ${theme.background};
        }
    `,
    dice: css`
        font-family: ${ROLL_FONT_NAME};
        font-size: ${4 * theme.fontSize}px;
        margin-right: -6px;
    `,
});
