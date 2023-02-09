/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { TRollButtonData, TTheme, TTranslations } from '../../../types';
import { RollsButtons } from '..';

type Props = {
    theme: TTheme;
    rollsElementData: TRollButtonData[];
    translations: TTranslations;
};

export const RollsHeader: React.FC<Props> = ({ theme, translations, rollsElementData }) => {
    const themedStyles = styles(theme);

    return (
        <>
            <div css={themedStyles.rollsWrapper}>
                <RollsButtons theme={theme} buttons={rollsElementData} />
            </div>

            <div css={themedStyles.info}>{translations.INFO}</div>
        </>
    );
};

const styles = (theme: TTheme) => ({
    info: css`
        text-align: center;
        color: ${theme.primary};
        font-size: ${theme.smallFontSize}px;
        margin: ${2 * theme.baseSpace}px 0;
    `,
    rollsWrapper: css`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    `,
});
