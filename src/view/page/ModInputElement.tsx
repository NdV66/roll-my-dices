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
        <div>
            <Button type="text" onClick={onClick}>
                {translations.MOD_INFO}
            </Button>

            <Modal open={showInput} onCancel={onClick} onOk={onConfirm}>
                <div>
                    <p>Wpisz jakiś mod</p>
                    <InputNumber onChange={onChange} value={currentValue} />
                </div>
            </Modal>
        </div>
    );
};

const styles = (theme: TTheme) => ({
    wrapper: css``,
    input: css``,
});
