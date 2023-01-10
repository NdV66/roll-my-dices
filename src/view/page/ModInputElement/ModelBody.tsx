/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { InputNumber } from 'antd';
import { TTheme, TTranslations } from '../../../types';

import Paragraph from 'antd/es/typography/Paragraph';

type Props = {
    theme: TTheme;
    currentValue: number;
    translations: TTranslations;
    onChange: (value: number | null) => void;
};

export const ModalBody: React.FC<Props> = ({ theme, translations, currentValue, onChange }) => {
    const themedStyles = styles(theme);

    return (
        <>
            <div css={themedStyles.inputWrapper}>
                <InputNumber onChange={onChange} value={currentValue} css={themedStyles.inputWrapper} />
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
        }
    `,
});
