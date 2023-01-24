import { BehaviorSubject } from 'rxjs';
import { useAppContext } from '../context';
import { DEFAULTS, FATE } from '../defaults';
import { mapResultToLeader } from '../services';
import { useStateWithObservableWithInit } from '../tools';
import { TTranslations } from '../types';

const showFateLeaderSource = new BehaviorSubject<boolean>(DEFAULTS.SHOW_FATE_LEADER_ON_ENTER);

const translateLeaderData = (translations: TTranslations) =>
    translations?.FATE_LEADER &&
    Array.from(FATE.LEADER.keys()).map((key) => ({
        value: key,
        name: translations.FATE_LEADER[mapResultToLeader(key)],
        key: mapResultToLeader(key),
    }));

export const useFateLeaderModalViewModel = () => {
    const { translations, theme } = useAppContext();
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

    console.log(mapResultToLeader(1));

    const onOpenModal = () => {
        showFateLeaderSource.next(true);
    };

    const onCloseModal = () => {
        showFateLeaderSource.next(false);
    };

    return {
        translations,
        onOpenModal,
        onCloseModal,
        showFateLeader,
        theme,
        translatedColumns,
        translatedLeaderData: translations && translateLeaderData(translations),
    };
};
