import { useMemo } from 'react';
import { BehaviorSubject } from 'rxjs';
import { useAppContext } from '../context';
import { DEFAULTS, FATE } from '../defaults';
import { translateLeaderData } from '../services';
import { useStateWithObservableWithInit } from '../tools';

export const useFateLeaderModalViewModel = (calculationResult: number | null) => {
    const { translations, theme } = useAppContext();
    const showFateLeaderSource = useMemo(() => new BehaviorSubject<boolean>(DEFAULTS.SHOW_FATE_LEADER_ON_ENTER), []);

    const showFateLeader = useStateWithObservableWithInit<boolean>(
        showFateLeaderSource,
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

    const onOpenModal = () => showFateLeaderSource.next(true);

    const onCloseModal = () => showFateLeaderSource.next(false);

    const isRollInScope =
        calculationResult !== null && calculationResult >= FATE.MIN_LEADER && calculationResult <= FATE.MAX_LEADER;

    return {
        translations,
        onOpenModal,
        onCloseModal,
        showFateLeader,
        theme,
        translatedColumns,
        translatedLeaderData: translations?.FATE_LEADER && translateLeaderData(translations, FATE.LEADER),
        isRollOutOfScope: !isRollInScope,
    };
};
