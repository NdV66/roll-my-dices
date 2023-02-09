/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Input } from 'antd';
import { TTheme, TTranslations } from '../../../types';
import { WarningParagraph } from '../WarningParagraph';

type Props = {
    theme: TTheme;
    currentValue: string;
    translations: TTranslations;
    isCurrentValueOk: boolean;
    onChange: (value: string) => void;
};

export const ModalBody: React.FC<Props> = ({ theme, translations, currentValue, onChange, isCurrentValueOk }) => {
    const themedStyles = styles(theme);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value;
        onChange(value);
    };

    return (
        <>
            <div css={themedStyles.inputWrapper}>
                <Input
                    onChange={handleOnChange}
                    value={currentValue}
                    css={themedStyles.input}
                    size="large"
                    placeholder={translations.MOD_PLACEHOLDER}
                />
            </div>

            {!isCurrentValueOk && <WarningParagraph theme={theme}>{translations.MOD_ERROR}</WarningParagraph>}

            <WarningParagraph theme={theme}>{translations.MOD_TIP}</WarningParagraph>
        </>
    );
};

const styles = (theme: TTheme) => ({
    inputWrapper: css`
        display: flex;
        justify-content: center;
        align-items: center;
        margin: ${3 * theme.baseSpace}px 0;
    `,
    input: css`
        width: 180px;
        text-align: center;
        border-color: ${theme.primary};

        &:hover,
        &:focus {
            box-shadow: none;
            border-color: ${theme.accent};
        }
    `,
});
