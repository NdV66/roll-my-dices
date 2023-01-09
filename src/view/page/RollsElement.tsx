/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { ROLL_FONT_NAME } from '../../styles/rollFont.style';
import { TTheme } from '../../types';
import { useRollsElementViewModel } from '../../viewModels';

export const RollsElement: React.FC = () => {
    const { rollsElementData, theme, rawRollDice } = useRollsElementViewModel();
    const themedStyles = styles(theme);

    return (
        <>
            <div css={themedStyles.rollsWrapper}>
                {rollsElementData.map((el) => (
                    <div key={el.key} onClick={el.roll} css={themedStyles.rollButton} role="button">
                        {el.displayValue}
                    </div>
                ))}
            </div>

            {rawRollDice && <div css={themedStyles.rawRollResult}>{rawRollDice}</div>}
        </>
    );
};

const size = 80;

const styles = (theme: TTheme) => ({
    rollsWrapper: css`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        margin-bottom: ${5 * theme.baseSpace}px;
    `,
    rollButton: css`
        display: inline-block;
        cursor: pointer;

        color: ${theme.accent};

        font-family: ${ROLL_FONT_NAME};
        font-size: ${4 * theme.fontSize}px;

        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;

        margin: ${theme.baseSpace}px ${3 * theme.baseSpace}px;

        &:hover {
            // background: ${theme.accent};
        }
    `,
    rawRollResult: css`
        display: flex;
        justify-content: center;
        align-items: center;

        font-family: ${ROLL_FONT_NAME};
        font-size: ${8 * theme.fontSize}px;
        color: ${theme.primary};
    `,
});
