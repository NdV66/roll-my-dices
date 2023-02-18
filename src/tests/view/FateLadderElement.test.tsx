import { render } from '@testing-library/react';
import { TEST_IDS } from '../../defaults';
import { TEXTS_EN } from '../../langs/en';
import { DARK_THEME } from '../../styles';
import { FateLadderElement } from '../../view/page/FateLadderElement';
import * as viewModel from '../../viewModels/useFateLadderModalViewModel';

const VIEW_MODEL_DATA = {
    theme: DARK_THEME,
    translations: TEXTS_EN,
    onOpenModal: jest.fn(),
    onCloseModal: jest.fn(),
    showFateLadder: false,
    translatedColumns: [],
    translatedLadderData: [],
    isRollOutOfScope: false,
};

const DEFAULT_PROPS = {
    calculationResult: 11,
};

describe('FateLadderElement', () => {
    test('Should render button, if modal is not visible', () => {
        jest.spyOn(viewModel, 'useFateLadderModalViewModel').mockReturnValue(VIEW_MODEL_DATA);
        const { getByText, queryByTestId } = render(<FateLadderElement {...DEFAULT_PROPS} />);

        expect(getByText(VIEW_MODEL_DATA.translations.FATE_LEADER_TITLE)).toBeInTheDocument();
        expect(queryByTestId(TEST_IDS.FATE_LADDER_MODAL)).not.toBeInTheDocument();
    });
});

export {};
