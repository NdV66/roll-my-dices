/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { TTheme } from '../../types';
import { useRollsElementViewModel } from '../../viewModels';
import { DiceButton, RollResult } from '../elements';

export const RollsElement: React.FC = () => {
    const { rollsElementData, theme, rollInfo, translations } = useRollsElementViewModel();
    const themedStyles = styles(theme);

    return (
        <>
            <div css={themedStyles.rollsWrapper}>
                {rollsElementData.map((el) => (
                    <DiceButton
                        key={el.diceType}
                        onClick={el.roll}
                        theme={theme}
                        diceType={el.diceType}
                        displayValue={el.displayValue}
                    />
                ))}
            </div>

            <div css={themedStyles.info}>{translations.INFO}</div>

            {rollInfo && <RollResult {...rollInfo} theme={theme} />}
        </>
    );
};

const styles = (theme: TTheme) => ({
    info: css`
        text-align: center;
        margin: ${theme.baseSpace}px 0;
        color: ${theme.accent};
        font-size: ${0.8 * theme.fontSize}px;
    `,
    rollsWrapper: css`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        margin: ${5 * theme.baseSpace}px 0;
    `,
});
