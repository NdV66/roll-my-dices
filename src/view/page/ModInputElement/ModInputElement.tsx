/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Modal, InputNumber } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import { TTheme } from '../../../types';
import { useModInputViewModel } from '../../../viewModels';
import Paragraph from 'antd/es/typography/Paragraph';
import { ModalFooter, TextButton } from '../../elements';

export const ModInputElement = () => {
    const { theme, toggleShowInput, translations, showInput, currentValue, updateCurrentValue, onConfirm, onRemove } =
        useModInputViewModel();

    const themedStyles = styles(theme);

    const onChange = (value: number | null) => {
        value && updateCurrentValue(value);
    };

    return (
        <>
            <div css={themedStyles.wrapper}>
                <TextButton onClick={toggleShowInput} theme={theme} small>
                    {translations.MOD_INFO} ({currentValue})
                </TextButton>

                <div onClick={onRemove} css={themedStyles.remove} role="button">
                    <DeleteOutlined />
                </div>
            </div>

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
