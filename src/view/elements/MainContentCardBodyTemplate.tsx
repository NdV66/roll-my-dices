/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { PropsWithChildren } from 'react';
import { TTheme } from '../../types';
import { CleanEverythingButton } from '../page/CleanEverytingButton';
import { ModInputElement } from '../page/ModInputElement';

type Props = {
    theme: TTheme;
};

export const MainContentCardBodyTemplate: React.FC<PropsWithChildren<Props>> = ({ theme, children }) => {
    const themedStyles = styles(theme);

    return (
        <>
            <ModInputElement />

            {children}

            <div css={themedStyles.cleanEverythingButton}>
                <CleanEverythingButton />
            </div>
        </>
    );
};

const styles = (theme: TTheme) => ({
    cleanEverythingButton: css`
        padding-top: ${2 * theme.baseSpace}px;
    `,
});
