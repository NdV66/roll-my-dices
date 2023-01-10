/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { PropsWithChildren } from 'react';
import { TTheme } from '../../types';

type Props = PropsWithChildren<{
    onClick: () => void;
    theme: TTheme;

    small?: boolean;
    disabled?: boolean;
}>;

export const TextButton: React.FC<Props> = ({ onClick, theme, children, small, disabled }) => {
    const themedStyles = styles(theme, small);

    const handleOnClick = disabled ? () => {} : onClick;

    return (
        <div role="button" onClick={handleOnClick} css={[themedStyles.button, disabled && themedStyles.disabled]}>
            {children}
        </div>
    );
};

const smallSizeMod = 0.8;
const normalSizeMod = 1;

const styles = (theme: TTheme, small?: boolean) => ({
    button: css`
        user-select: none;
        color: ${theme.accent};
        font-size: ${(small ? smallSizeMod : normalSizeMod) * theme.fontSize}px;
        cursor: pointer;
    `,
    disabled: css`
        cursor: default;
        pointer-events: all !important;
        color: ${theme.secondary};
    `,
});
