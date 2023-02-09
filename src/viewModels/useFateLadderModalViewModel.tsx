import { useMemo } from 'react';
import { BehaviorSubject } from 'rxjs';
import { useAppContext } from '../context';
import { DEFAULTS, FATE } from '../defaults';
import { translateLadderData } from '../services';
import { useStateWithObservableWithInit } from '../tools';

export const useFateLadderModalViewModel = (calculationResult: number | null) => {
    const { translations, theme } = useAppContext();
    const showFateLadderSource = useMemo(() => new BehaviorSubject<boolean>(DEFAULTS.SHOW_FATE_LEADER_ON_ENTER), []);

    const showFateLadder = useStateWithObservableWithInit<boolean>(
        showFateLadderSource,
        DEFAULTS.SHOW_FATE_LEADER_ON_ENTER,
    );

    const translatedColumns = translations && [
        {
            title: translations.FATE_LEADER_HEADER_VALUE,
            dataIndex: 'value',
            key: 'value',
        },
        {
            title: translations.FATE_LEADER_HEADER_NAME,
            dataIndex: 'name',
            key: 'name',
        },
    ];

    const onOpenModal = () => showFateLadderSource.next(true);

    const onCloseModal = () => showFateLadderSource.next(false);

    const isRollInScope =
        calculationResult !== null && calculationResult >= FATE.MIN_LEADER && calculationResult <= FATE.MAX_LEADER;

    return {
        translations,
        onOpenModal,
        onCloseModal,
        showFateLadder,
        theme,
        translatedColumns,
        translatedLadderData: translations?.FATE_LEADER && translateLadderData(translations, FATE.LADDER),
        isRollOutOfScope: !isRollInScope,
    };
};
