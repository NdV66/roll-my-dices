/** @jsxImportSource @emotion/react */

import { useFateLadderModalViewModel } from '../../viewModels';
import { TextButton } from '../elements';
import { FateLadderModal } from '../elements/FateLadderModal';

export const HIGHLIGHT_CLASS = 'currentRoll';

type Props = {
    calculationResult: number | null;
};

export const FateLadderElement: React.FC<Props> = ({ calculationResult }) => {
    const {
        translations,
        onOpenModal,
        onCloseModal,
        showFateLadder,
        theme,
        translatedColumns,
        translatedLadderData,
        isRollOutOfScope,
    } = useFateLadderModalViewModel(calculationResult);

    return (
        <>
            <TextButton onClick={onOpenModal} theme={theme} small>
                {translations.FATE_LEADER_TITLE}
            </TextButton>

            <FateLadderModal
                isRollOutOfScope={isRollOutOfScope}
                onCloseModal={onCloseModal}
                showFateLadder={showFateLadder}
                translations={translations}
                theme={theme}
                columns={translatedColumns}
                dataSource={translatedLadderData}
                calculationResult={calculationResult}
            />
        </>
    );
};
