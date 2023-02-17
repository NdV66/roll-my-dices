import { render } from '@testing-library/react';
import { AppLangs } from '../../types';
import { ChangeAppLangElement } from '../../view/page/ChangeAppLangElement';
import * as viewModel from '../../viewModels/useChangeLangElementViewModel';

const VIEW_MODEL_DATA = {
    onClickItem: jest.fn(),
    appLang: AppLangs.EN,
    items: [],
};

const TEST_ID = 'ChangeAppLangElement_testId';

describe('ChangeAppLangElement', () => {
    test('Should render correctly', () => {
        jest.spyOn(viewModel, 'useChangeLangElementViewModel').mockReturnValue(VIEW_MODEL_DATA);
        const { getByTestId } = render(<ChangeAppLangElement />);
        expect(getByTestId(TEST_ID)).toBeInTheDocument();
    });
});

export {};
