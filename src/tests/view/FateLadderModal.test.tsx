import { render } from '@testing-library/react';
import { TEST_IDS } from '../../defaults';
import { TEXTS_EN } from '../../langs/en';
import { DARK_THEME } from '../../styles';
import { FateLadderModal } from '../../view/elements/FateLadderModal';

const DEFAULT_PROPS = {
    theme: DARK_THEME,
    translations: TEXTS_EN,
    onOpenModal: jest.fn(),
    onCloseModal: jest.fn(),
    showFateLadder: true,
    columns: [
        {
            title: 'title',
            dataIndex: 'index',
            key: 'key',
        },
    ],
    dataSource: [
        {
            value: 6,
            name: 'name',
            key: 'key',
        },
    ],
    isRollOutOfScope: false,
    calculationResult: 11,
};

describe('FateLadderModal', () => {
    test('Should not render, if should not be showed', () => {
        const { queryByTestId } = render(<FateLadderModal {...DEFAULT_PROPS} showFateLadder={false} />);
        expect(queryByTestId(TEST_IDS.FATE_LADDER_MODAL)).not.toBeInTheDocument();
    });

    test('Should render, if should be showed', () => {
        const { getByTestId, getByText, queryByTestId } = render(<FateLadderModal {...DEFAULT_PROPS} />);

        expect(getByTestId(TEST_IDS.FATE_LADDER_MODAL)).toBeInTheDocument();
        expect(getByTestId(TEST_IDS.MODAL_FOOTER)).toBeInTheDocument();
        expect(getByText(DEFAULT_PROPS.translations.FATE_LEADER_TITLE)).toBeInTheDocument();
        expect(queryByTestId(TEST_IDS.FATE_LADDER_MODAL_TABLE)).toBeInTheDocument();
    });

    test('Should render warning, if roll is out of scope and calculation exists', () => {
        const { getByText } = render(<FateLadderModal {...DEFAULT_PROPS} isRollOutOfScope calculationResult={6} />);
        expect(getByText(DEFAULT_PROPS.translations.FATE_LEADER_TITLE_WARNING)).toBeInTheDocument();
    });

    test('Should not render warning, if roll is not out of scope and calculation exists', () => {
        const { queryByText } = render(<FateLadderModal {...DEFAULT_PROPS} />);
        expect(queryByText(DEFAULT_PROPS.translations.FATE_LEADER_TITLE_WARNING)).not.toBeInTheDocument();
    });

    test('Should not render warning, if roll is not out of scope and calculation not exists', () => {
        const { queryByText } = render(<FateLadderModal {...DEFAULT_PROPS} calculationResult={null} />);
        expect(queryByText(DEFAULT_PROPS.translations.FATE_LEADER_TITLE_WARNING)).not.toBeInTheDocument();
    });

    test('Should not render warning, if roll is out of scope and calculation not exists', () => {
        const { queryByText } = render(
            <FateLadderModal {...DEFAULT_PROPS} calculationResult={null} isRollOutOfScope />,
        );
        expect(queryByText(DEFAULT_PROPS.translations.FATE_LEADER_TITLE_WARNING)).not.toBeInTheDocument();
    });
});

export {};
