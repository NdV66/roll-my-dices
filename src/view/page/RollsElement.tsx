/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { TTheme } from '../../types';
import { useRollsElementViewModel } from '../../viewModels';
import { RollResult } from '../elements';
import { NoRollResult, RollsButtons } from '../elements';

export const RollsElement: React.FC = () => {
    const { rollsElementData, theme, rollInfo, translations } = useRollsElementViewModel();
    const themedStyles = styles(theme);

    return (
        <>
            <div css={themedStyles.rollsWrapper}>
                <RollsButtons theme={theme} buttons={rollsElementData} />
            </div>

            <div css={themedStyles.info}>{translations.INFO}</div>

            <div css={themedStyles.result}>
                {rollInfo ? <RollResult {...rollInfo} theme={theme} /> : <NoRollResult theme={theme} />}
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
        color: ${theme.primary};
        font-size: ${theme.smallFontSize}px;
    `,
    rollsWrapper: css`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        margin: ${5 * theme.baseSpace}px 0;
    `,
});
