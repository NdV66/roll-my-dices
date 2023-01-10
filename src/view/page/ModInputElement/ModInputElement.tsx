import { Modal } from 'antd';
import { useModInputViewModel } from '../../../viewModels';
import { ModalFooter } from '../../elements';
import { Buttons } from './Buttons';
import { ModalBody } from './ModalBody';

export const ModInputElement = () => {
    const {
        theme,
        toggleShowInput,
        translations,
        showInput,
        currentValue,
        updateCurrentValue,
        onConfirm,
        onRemove,
        currentConfirmedMod,
        isCurrentValueOk,
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
                onCancel={() => toggleShowInput()}
                open={showInput}
                title={translations.MOD_INFO}
                footer={
                    <ModalFooter
                        onCancel={toggleShowInput}
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
