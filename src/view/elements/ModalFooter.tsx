/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { TTheme, TTranslations } from '../../types';
import { TextButton } from './TextButton';

type Props = {
    translations: TTranslations;
    onCancel: () => void;
    onConfirm: () => void;
    theme: TTheme;
    disableOk?: boolean;
};

export const ModalFooter: React.FC<Props> = ({ translations, onConfirm, onCancel, theme, disableOk }) => {
    const themedStyles = styles(theme);

    return (
        <div css={themedStyles.wrapper}>
            <TextButton onClick={onCancel} theme={theme} small>
                {translations.CANCEL}
            </TextButton>

            <div css={themedStyles.okButton}>
                <TextButton onClick={onConfirm} theme={theme} disabled={disableOk}>
                    {translations.OK}
                </TextButton>
            </div>
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
        font-weight: 700;

        .ant-btn-primary {
            box-shadow: none !important;
        }
    `,
});
