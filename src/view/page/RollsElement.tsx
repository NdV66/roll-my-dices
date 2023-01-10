/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { TTheme } from '../../types';
import { useRollsElementViewModel } from '../../viewModels';
import { DiceButton, RollResult, TextButton } from '../elements';
import { NoRollResult } from '../elements/NoRollResult';

export const RollsElement: React.FC = () => {
    const { rollsElementData, theme, rollInfo, translations, onCleanAll } = useRollsElementViewModel();
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

            <div css={themedStyles.result}>
                {rollInfo ? <RollResult {...rollInfo} theme={theme} /> : <NoRollResult theme={theme} />}
            </div>

            <div css={themedStyles.cleanWrapper}>
                <TextButton theme={theme} onClick={onCleanAll} small>
                    Clean everything
                </TextButton>
            </div>
        </>
    );
};

const styles = (theme: TTheme) => ({
    result: css`
        display: flex;
        justify-content: center;
        align-items: center;

        margin: ${4 * theme.baseSpace}px 0;
    `,
    info: css`
        text-align: center;
        color: ${theme.accent};
        font-size: ${0.8 * theme.fontSize}px;
    `,
    rollsWrapper: css`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        margin: ${5 * theme.baseSpace}px 0;
    `,
    cleanWrapper: css`
        display: flex;
        justify-content: flex-end;
    `,
});
