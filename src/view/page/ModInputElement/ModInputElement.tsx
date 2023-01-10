/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Modal, InputNumber, Button } from 'antd';
import { TTheme } from '../../../types';
import { useModInputViewModel } from '../../../viewModels';
import Paragraph from 'antd/es/typography/Paragraph';
import { ModalFooter } from '../../elements';
import { Buttons } from './Buttons';

export const ModInputElement = () => {
    const { theme, toggleShowInput, translations, showInput, currentValue, updateCurrentValue, onConfirm, onRemove } =
        useModInputViewModel();
    const themedStyles = styles(theme);

    const onChange = (value: number | null) => {
        value && updateCurrentValue(value);
    };

    return (
        <>
            <Buttons
                theme={theme}
                onOpen={toggleShowInput}
                onRemove={onRemove}
                translations={translations}
                currentValue={currentValue}
            />

            <Modal
                onCancel={() => toggleShowInput()}
                open={showInput}
                title={translations.MOD_INFO}
                footer={
                    <ModalFooter
                        onCancel={toggleShowInput}
                        onConfirm={onConfirm}
                        translations={translations}
                        theme={theme}
                    />
                }
            >
                <div css={themedStyles.inputWrapper}>
                    <InputNumber onChange={onChange} value={currentValue} css={themedStyles.inputWrapper} />
                </div>
                <Paragraph type="warning" css={themedStyles.warning}>
                    {translations.MOD_TIP}
                </Paragraph>
            </Modal>
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
