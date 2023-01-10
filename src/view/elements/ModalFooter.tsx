/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Button } from 'antd';
import { TTheme, TTranslations } from '../../types';
import { TextButton } from './TextButton';

type Props = {
    translations: TTranslations;
    onCancel: () => void;
    onConfirm: () => void;
    theme: TTheme;
};

export const ModalFooter: React.FC<Props> = ({ translations, onConfirm, onCancel, theme }) => {
    const themedStyles = styles(theme);

    return (
        <div css={themedStyles.wrapper}>
            <TextButton onClick={onCancel} theme={theme}>
                {translations.CANCEL}
            </TextButton>

            <Button type="primary" onClick={onConfirm} css={themedStyles.okButton}>
                {translations.OK}
            </Button>
        </div>
    );
};

const styles = (theme: TTheme) => ({
    wrapper: css`
        display: flex;
        justify-content: flex-end;
        align-items: center;
    `,
    okButton: css`
        margin-left: ${2 * theme.baseSpace}px;
    `,
});
