/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button, Modal } from 'antd';
import InputNumber from 'rc-input-number';

import { TTheme } from '../../types';
import { useModInputViewModel } from '../../viewModels';

export const ModInputElement = () => {
    const { theme, toggleShowInput, translations, showInput, currentValue, updateCurrentValue, onConfirm } =
        useModInputViewModel();
    const themedStyles = styles(theme);

    const onChange = (value: number | null) => {
        value && updateCurrentValue(value);
    };

    const onClick = () => {
        toggleShowInput();
    };

    return (
        <>
            <div css={themedStyles.wrapper}>
                <Button type="link" onClick={onClick} css={themedStyles.button}>
                    {translations.MOD_INFO}
                </Button>
            </div>

            <Modal open={showInput} onCancel={onClick} onOk={onConfirm}>
                <div>
                    <p>Wpisz jakiś mod</p>
                    <InputNumber onChange={onChange} value={currentValue} />
                </div>
            </Modal>
        </>
    );
};

const styles = (theme: TTheme) => ({
    button: css`
        color: ${theme.accent};
        font-size: ${0.8 * theme.fontSize}px;
    `,
    wrapper: css`
        display: flex;
        justify-content: flex-end;
    `,
    input: css``,
});
