/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { PropsWithChildren } from 'react';
import { TTheme } from '../../types';

type Props = PropsWithChildren<{
    onClick: () => void;
    theme: TTheme;
    small?: boolean;
}>;

export const TextButton: React.FC<Props> = ({ onClick, theme, children, small }) => {
    const themedStyles = styles(theme, small);

    return (
        <div role="button" onClick={onClick} css={themedStyles.button}>
            {children}
        </div>
    );
};

const smallSizeMod = 0.8;
const normalSizeMod = 1;

const styles = (theme: TTheme, small?: boolean) => ({
    button: css`
        color: ${theme.accent};
        font-size: ${(small ? smallSizeMod : normalSizeMod) * theme.fontSize}px;
        cursor: pointer;
    `,
});
