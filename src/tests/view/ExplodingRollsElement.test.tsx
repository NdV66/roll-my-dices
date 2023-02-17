import { render } from '@testing-library/react';
import { TEST_IDS } from '../../defaults';
import { TEXTS_EN } from '../../langs/en';
import { DARK_THEME } from '../../styles';
import { ExplodingRollsElement } from '../../view/page/ExplodingRollsElement';
import * as viewModel from '../../viewModels/useExplodingRollsElementViewModel';
import { EXPLODING_ROLL_NO_EXPLOSION_NO_MOD_EXTENDED } from '../mocks';

const VIEW_MODEL_DATA = {
    rollsElementData: [],
    theme: DARK_THEME,
    rollInfo: { ...EXPLODING_ROLL_NO_EXPLOSION_NO_MOD_EXTENDED, displayValues: [] },
    translations: TEXTS_EN,
};

describe('ExplodingRollsElement', () => {
    test('Should render correctly (with roll info)', () => {
        jest.spyOn(viewModel, 'useExplodingRollsElementViewModel').mockReturnValue(VIEW_MODEL_DATA);
        const { getByText, getByTestId } = render(<ExplodingRollsElement />);

        expect(getByText(VIEW_MODEL_DATA.translations.INFO)).toBeInTheDocument();
        expect(getByTestId(TEST_IDS.EXPLODING_ROLL_RESULT)).toBeInTheDocument();
    });
});

export {};
