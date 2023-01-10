/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { DeleteOutlined } from '@ant-design/icons';

import { TTheme, TTranslations } from '../../../types';
import { TextButton } from '../../elements';

type Props = {
    theme: TTheme;
    onRemove: () => void;
    onOpen: () => void;
    currentValue: number;
    translations: TTranslations;
};

export const Buttons: React.FC<Props> = ({ theme, onRemove, onOpen, currentValue, translations }) => {
    const themedStyles = styles(theme);

    return (
        <div css={themedStyles.wrapper}>
            <TextButton onClick={onOpen} theme={theme} small>
                {translations.MOD_INFO} ({currentValue})
            </TextButton>

            <div onClick={onRemove} css={themedStyles.remove} role="button">
                <DeleteOutlined />
            </div>
        </div>
    );
};

const styles = (theme: TTheme) => ({
    remove: css`
        color: ${theme.accent};
        cursor: pointer;
        font-size: ${theme.fontSize}px;
        margin-left: ${theme.baseSpace}px;
    `,
    wrapper: css`
        display: flex;
        justify-content: flex-end;
        align-items: center;

        margin-top: ${theme.baseSpace}px;
    `,
});
