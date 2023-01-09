/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FONT_FAMILY_BY_DICE_TYPE } from '../../defaults';

import { DiceTypes, TTheme } from '../../types';
import { useRollsElementViewModel } from '../../viewModels';
import { DiceButton } from '../elements';

export const RollsElement: React.FC = () => {
    const { rollsElementData, theme, rollInfo, translations } = useRollsElementViewModel();
    const themedStyles = styles(theme);

    console.log(rollInfo);

    return (
        <>
            <div css={themedStyles.info}>{translations.INFO}</div>

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

            {rollInfo && <div css={themedStyles.rawRollResult(rollInfo.dice)}>{rollInfo.displayValue}</div>}
        </>
    );
};

const styles = (theme: TTheme) => ({
    info: css`
        text-align: right;
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
    rawRollResult: (diceType: DiceTypes) => css`
        display: flex;
        justify-content: center;
        align-items: center;

        user-select: none;

        font-family: ${FONT_FAMILY_BY_DICE_TYPE[diceType]};
        font-size: ${9 * theme.fontSize}px;
        color: ${theme.primary};
    `,
});
