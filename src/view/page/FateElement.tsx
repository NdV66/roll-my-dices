/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { screenMd } from '../../styles';

import { DiceTypes, TTheme } from '../../types';

import { useFateElementViewModel } from '../../viewModels/useFateElementViewModel';
import { NoRollResult } from '../elements';
import { FateRollResult } from '../elements/FateRollResult';
import { FateLeaderElement } from './FateLeaderElement';

export const FateElement: React.FC = () => {
    const { translations, rollDie, roll, theme } = useFateElementViewModel();
    const themedStyles = styles(theme);

    return (
        <>
            {roll ? <FateRollResult {...roll} theme={theme} dice={DiceTypes.FATE} /> : <NoRollResult theme={theme} />}

            <div css={themedStyles.buttonWrapper}>
                <div onClick={rollDie} role="button" css={themedStyles.button}>
                    {translations.FATE_ROLL}
                </div>
            </div>

            <div css={[themedStyles.buttonWrapper, themedStyles.fateLeaderButton]}>
                <FateLeaderElement />
            </div>
        </>
    );
};

const styles = (theme: TTheme) => ({
    buttonWrapper: css`
        justify-content: center;
        display: flex;
        align-items: center;
    `,
    button: css`
        user-select: none;
        display: inline-block;
        margin-top: ${3 * theme.fontSize}px;
        cursor: pointer;
        font-weight: 700;
        background-color: ${theme.primary};
        color: ${theme.background};
        border-radius: 5px;
        padding: ${2 * theme.baseSpace}px ${6 * theme.baseSpace}px;

        &:hover,
        &:active {
            background-color: ${theme.accent};
            transition: background-color 0.3s;
        }

        ${screenMd(css`
            padding: ${theme.baseSpace}px ${3 * theme.baseSpace}px;
        `)}
    `,
    fateLeaderButton: css`
        margin-top: ${2 * theme.baseSpace}px;
    `,
});
