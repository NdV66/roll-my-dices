import { render } from '@testing-library/react';
import { TEST_IDS } from '../../defaults';
import { TEXTS_EN } from '../../langs/en';
import { DARK_THEME } from '../../styles';
import { FateElement } from '../../view/page/FateElement';
import * as viewModel from '../../viewModels/useFateElementViewModel';
import * as ladderViewModel from '../../viewModels/useFateLadderModalViewModel';
import { FATE_ROLL_EXTENDED_NO_MOD_MOCK } from '../mocks';

const VIEW_MODEL_DATA = {
    theme: DARK_THEME,
    translations: TEXTS_EN,
    roll: FATE_ROLL_EXTENDED_NO_MOD_MOCK,
    rollDie: jest.fn(),
};

const LADDER_VIEW_MODEL_DATA = {
    theme: DARK_THEME,
    translations: TEXTS_EN,
    onOpenModal: jest.fn(),
    onCloseModal: jest.fn(),
    showFateLadder: false,
    translatedColumns: [],
    translatedLadderData: [],
    isRollOutOfScope: false,
};

describe('FateElement', () => {
    test('Should render correctly (with roll result)', () => {
        jest.spyOn(viewModel, 'useFateElementViewModel').mockReturnValue(VIEW_MODEL_DATA);
        jest.spyOn(ladderViewModel, 'useFateLadderModalViewModel').mockReturnValue(LADDER_VIEW_MODEL_DATA);
        const { getByText, getByTestId, queryByTestId } = render(<FateElement />);

        expect(getByText(VIEW_MODEL_DATA.translations.FATE_ROLL)).toBeInTheDocument();
        expect(getByText(VIEW_MODEL_DATA.translations.FATE_LEADER_TITLE)).toBeInTheDocument();
        expect(getByTestId(TEST_IDS.FATE_ROLL_RESULT)).toBeInTheDocument();
        expect(queryByTestId(TEST_IDS.NO_ROLL_RESULT)).not.toBeInTheDocument();
    });

    test('Should render correctly (without roll result)', () => {
        jest.spyOn(viewModel, 'useFateElementViewModel').mockReturnValue({ ...VIEW_MODEL_DATA, roll: null });
        jest.spyOn(ladderViewModel, 'useFateLadderModalViewModel').mockReturnValue(LADDER_VIEW_MODEL_DATA);
        const { getByText, getByTestId, queryByTestId } = render(<FateElement />);

        expect(getByText(VIEW_MODEL_DATA.translations.FATE_ROLL)).toBeInTheDocument();
        expect(getByText(VIEW_MODEL_DATA.translations.FATE_LEADER_TITLE)).toBeInTheDocument();
        expect(queryByTestId(TEST_IDS.FATE_ROLL_RESULT)).not.toBeInTheDocument();
        expect(getByTestId(TEST_IDS.NO_ROLL_RESULT)).toBeInTheDocument();
    });
});

export {};
