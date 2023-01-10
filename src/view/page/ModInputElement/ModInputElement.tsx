import { Modal } from 'antd';
import { useModInputViewModel } from '../../../viewModels';
import { ModalFooter } from '../../elements';
import { Buttons } from './Buttons';
import { ModalBody } from './ModalBody';

export const ModInputElement = () => {
    const {
        theme,
        translations,
        showInput,
        currentValue,
        updateCurrentValue,
        onConfirm,
        onRemove,
        currentConfirmedMod,
        isCurrentValueOk,
        onCloseModal,
        toggleShowInput,
    } = useModInputViewModel();

    return (
        <>
            <Buttons
                theme={theme}
                onOpen={toggleShowInput}
                onRemove={onRemove}
                translations={translations}
                currentValue={currentConfirmedMod}
            />

            <Modal
                onCancel={() => onCloseModal()}
                open={showInput}
                title={translations.MOD_INFO}
                footer={
                    <ModalFooter
                        onCancel={onCloseModal}
                        onConfirm={onConfirm}
                        translations={translations}
                        theme={theme}
                        disableOk={!isCurrentValueOk}
                    />
                }
            >
                <ModalBody
                    theme={theme}
                    translations={translations}
                    currentValue={currentValue}
                    onChange={updateCurrentValue}
                    isCurrentValueOk={isCurrentValueOk}
                />
            </Modal>
        </>
    );
};
