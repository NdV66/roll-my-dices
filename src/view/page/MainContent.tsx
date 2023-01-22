/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';

import { CleanEverythingButton } from './CleanEverytingButton';
import { ModInputElement } from './ModInputElement';
import { RollsElement } from './RollsElement';

export const MainContent: React.FC = () => (
    <>
        <ModInputElement />
        <RollsElement />
        <CleanEverythingButton />
    </>
);

// const styles = (theme: TTheme) => ({
//     theme: css``,
// });
