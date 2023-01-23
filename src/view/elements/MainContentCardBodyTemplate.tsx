/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { PropsWithChildren } from 'react';
import { MainContentTab, TTheme } from '../../types';
import { CleanEverythingButton } from '../page/CleanEverytingButton';
import { ModInputElement } from '../page/ModInputElement';

type Props = {
    theme: TTheme;
    activeMainTab: MainContentTab;
};

export const MainContentCardBodyTemplate: React.FC<PropsWithChildren<Props>> = ({ theme, children, activeMainTab }) => {
    const themedStyles = styles(theme);

    return (
        <>
            <ModInputElement activeMainTab={activeMainTab} />

            {children}

            <div css={themedStyles.cleanEverythingButton}>
                <CleanEverythingButton activeMainTab={activeMainTab} />
            </div>
        </>
    );
};

const styles = (theme: TTheme) => ({
    cleanEverythingButton: css`
        padding-top: ${2 * theme.baseSpace}px;
    `,
});
