/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Input } from 'antd';
import { TTheme, TTranslations } from '../../../types';

import Paragraph from 'antd/es/typography/Paragraph';

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
        onChange(value || '');
    };

    const status = isCurrentValueOk ? '' : 'error';

    return (
        <>
            <div css={themedStyles.inputWrapper}>
                <Input
                    onChange={handleOnChange}
                    value={currentValue}
                    css={themedStyles.input}
                    size={'large'}
                    status={status}
                />
            </div>

            <Paragraph type="warning" css={themedStyles.warning}>
                {translations.MOD_TIP}
            </Paragraph>
        </>
    );
};

const styles = (theme: TTheme) => ({
    warning: css`
        font-size: ${0.8 * theme.fontSize}px;
        font-style: italic;
        text-align: center;
    `,
    inputWrapper: css`
        display: flex;
        justify-content: center;
        align-items: center;
        margin: ${3 * theme.baseSpace}px 0;
    `,
    input: css`
        .ant-input-number-input {
            text-align: center;
            box-shadow: none !important;
        }

        .ant-input-number-focused:hover {
            box-shadow: none;
            border: none;
            background: red;
            border-color: red;
        }

        .ant-input-number-focused {
            box-shadow: none;
            border: none;
            background: red;
            border-color: red;
        }
    `,
});
