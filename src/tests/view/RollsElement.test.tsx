import { render } from '@testing-library/react';
import { TEXTS_EN } from '../../langs/en';
import { DARK_THEME } from '../../styles';
import * as viewModel from '../../viewModels/useRollsElementViewModel';
import { ROLL_EXTENDED_MOCK } from '../mocks';
import { RollsElement } from '../../view/page/RollsElement';
import { TEST_IDS } from '../../defaults';

const VIEW_MODEL_DATA = {
    theme: DARK_THEME,
    rollsElementData: [],
    rollInfo: { ...ROLL_EXTENDED_MOCK, displayValue: 'A' },
    translations: TEXTS_EN,
};

describe('RollsElement', () => {
    test('Should render correctly (with roll info)', () => {
        jest.spyOn(viewModel, 'useRollsElementViewModel').mockReturnValue(VIEW_MODEL_DATA);
        const { getByText, getByTestId, queryByTestId } = render(<RollsElement />);

        expect(getByText(VIEW_MODEL_DATA.translations.INFO)).toBeInTheDocument();
        expect(getByTestId(TEST_IDS.COMMON_ROLL_RESULT)).toBeInTheDocument();
        expect(queryByTestId(TEST_IDS.NO_ROLL_RESULT)).not.toBeInTheDocument();
    });

    test('Should render correctly (without roll info)', () => {
        jest.spyOn(viewModel, 'useRollsElementViewModel').mockReturnValue({ ...VIEW_MODEL_DATA, rollInfo: null });
        const { getByText, getByTestId, queryByTestId } = render(<RollsElement />);

        expect(getByText(VIEW_MODEL_DATA.translations.INFO)).toBeInTheDocument();
        expect(queryByTestId(TEST_IDS.COMMON_ROLL_RESULT)).not.toBeInTheDocument();
        expect(getByTestId(TEST_IDS.NO_ROLL_RESULT)).toBeInTheDocument();
    });
});

export {};
