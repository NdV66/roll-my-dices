/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { ROLL_FONT_NAME_STANDARD } from '../../styles/rollFont.style';
import { TTheme } from '../../types';
import { useRollsElementViewModel } from '../../viewModels';
import { DiceButton } from '../elements';

export const RollsElement: React.FC = () => {
    const { rollsElementData, theme, rawRollDice, translations } = useRollsElementViewModel();
    const themedStyles = styles(theme);

    return (
        <>
            <div css={themedStyles.info}>{translations.INFO}</div>

            <div css={themedStyles.rollsWrapper}>
                {rollsElementData.map((el) => (
                    <DiceButton key={el.key} onClick={el.roll} theme={theme} displayValue={el.displayValue} />
                ))}
            </div>

            {rawRollDice && <div css={themedStyles.rawRollResult}>{rawRollDice}</div>}
        </>
    );
};

const styles = (theme: TTheme) => ({
    info: css`
        text-align: right;
        margin: ${theme.baseSpace}px 0;
        color: ${theme.accent};
    `,
    rollsWrapper: css`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        margin: ${5 * theme.baseSpace}px 0;
    `,
    rawRollResult: css`
        display: flex;
        justify-content: center;
        align-items: center;

        font-family: ${ROLL_FONT_NAME_STANDARD};
        font-size: ${8 * theme.fontSize}px;
        color: ${theme.primary};
    `,
});
