/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { DEFAULTS } from '../../defaults';

import { TTheme } from '../../types';
import { useRollsElementViewModel } from '../../viewModels';

export const RollsElement: React.FC = () => {
    const { roll, rollsElementData, theme } = useRollsElementViewModel();
    const themedStyles = styles(theme);

    return (
        <>
            <div css={themedStyles.rollsWrapper}>
                {rollsElementData.map((el) => (
                    <div key={el.key} onClick={el.roll} css={themedStyles.rollButton} role="button">
                        {el.title}
                    </div>
                ))}
            </div>

            {roll !== DEFAULTS.EMPTY_ROLL_RESULT && <div css={themedStyles.rollResult}>{roll}</div>}
        </>
    );
};

const size = 80;

const styles = (theme: TTheme) => ({
    rollsWrapper: css`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        margin-bottom: ${4 * theme.baseSpace}px;
    `,
    rollButton: css`
        display: inline-block;
        cursor: pointer;

        background: ${theme.primary};
        color: ${theme.background};
        font-weight: 700;

        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;

        margin: ${theme.baseSpace}px ${2 * theme.baseSpace}px;

        &:hover {
            background: ${theme.accent};
        }
    `,
    rollResult: css`
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: ${6 * theme.fontSize}px;

        color: ${theme.primary};
    `,
});
