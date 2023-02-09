/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { TRollButtonData, TRollInfo, TTheme, TTranslations } from '../../../types';
import { NoRollResult } from '..';
import { CommonRollResult } from './CommonRollResult';
import { RollsHeader } from './RollsHeader';

type Props = {
    theme: TTheme;
    rollsElementData: TRollButtonData[];
    rollInfo: TRollInfo | null;
    translations: TTranslations;
};

export const CommonRolls: React.FC<Props> = ({ theme, translations, rollsElementData, rollInfo }) => {
    const themedStyles = styles(theme);

    return (
        <>
            <RollsHeader theme={theme} translations={translations} rollsElementData={rollsElementData} />

            <div css={themedStyles.result}>
                {rollInfo ? <CommonRollResult {...rollInfo} theme={theme} /> : <NoRollResult theme={theme} />}
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
});
