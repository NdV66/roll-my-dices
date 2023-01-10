import { Modal } from 'antd';
import { useModInputViewModel } from '../../../viewModels';
import { ModalFooter } from '../../elements';
import { Buttons } from './Buttons';
import { ModalBody } from './ModelBody';

export const ModInputElement = () => {
    const { theme, toggleShowInput, translations, showInput, currentValue, updateCurrentValue, onConfirm, onRemove } =
        useModInputViewModel();

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
                <ModalBody theme={theme} translations={translations} currentValue={currentValue} onChange={onChange} />
            </Modal>
        </>
    );
};
