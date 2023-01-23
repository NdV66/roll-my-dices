import { Modal } from 'antd';
import { MainContentTab } from '../../types';
import { useModInputViewModel } from '../../viewModels';
import { ModalFooter } from '../elements';
import { ModInputModalButtons, ModalBody } from '../elements/ModInputElement';

type Props = {
    activeMainTab: MainContentTab;
};

export const ModInputElement: React.FC<Props> = ({ activeMainTab }) => {
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
    } = useModInputViewModel(activeMainTab);

    return (
        <>
            <ModInputModalButtons
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
