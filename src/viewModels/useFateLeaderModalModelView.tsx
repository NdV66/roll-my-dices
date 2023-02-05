import { useMemo } from 'react';
import { BehaviorSubject } from 'rxjs';
import { useAppContext } from '../context';
import { DEFAULTS, FATE } from '../defaults';
import { translateLeaderData } from '../services';
import { useStateWithObservableWithInit } from '../tools';

export const useFateLeaderModalViewModel = () => {
    const { translations, theme } = useAppContext();
    const showFateLeaderSource = useMemo(() => new BehaviorSubject<boolean>(DEFAULTS.SHOW_FATE_LEADER_ON_ENTER), []);

    const showFateLeader = useStateWithObservableWithInit<boolean>(
        showFateLeaderSource,
        DEFAULTS.SHOW_FATE_LEADER_ON_ENTER,
    );

    const translatedColumns = [
        {
            title: translations.FATE_LEADER_HEADER_VALUE,
            dataIndex: 'value',
            key: 'value',
            render: (value: number) => <strong>{value}</strong>,
        },
        {
            title: translations.FATE_LEADER_HEADER_NAME,
            dataIndex: 'name',
            key: 'name',
        },
    ];

    const onOpenModal = () => showFateLeaderSource.next(true);

    const onCloseModal = () => showFateLeaderSource.next(false);

    return {
        translations,
        onOpenModal,
        onCloseModal,
        showFateLeader,
        theme,
        translatedColumns,
        translatedLeaderData: translations && translateLeaderData(translations, FATE.LEADER),
    };
};
