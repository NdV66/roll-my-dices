import { fireEvent, render } from '@testing-library/react';
import { TEXTS_EN } from '../../langs/en';
import { DARK_THEME } from '../../styles';
import * as viewModel from '../../viewModels/useModInputViewModel';
import { TEST_IDS } from '../../defaults';
import { ModInputElement } from '../../view/page/ModInputElement';
import { MainContentTab } from '../../types';
import { act } from 'react-dom/test-utils';

const VIEW_MODEL_DATA = {
    theme: DARK_THEME,
    translations: TEXTS_EN,
    showInput: true,
    currentValue: '',
    updateCurrentValue: jest.fn(),
    onConfirm: jest.fn(),
    onRemove: jest.fn(),
    currentConfirmedMod: 2,
    isCurrentValueOk: true,
    onCloseModal: jest.fn(),
    toggleShowInput: jest.fn(),
};

const DEFAULT_PROPS = {
    activeMainTab: MainContentTab.CLASSIC_D20,
};

describe('ModInputElement', () => {
    test('Should render correctly (with no modal)', () => {
        jest.spyOn(viewModel, 'useModInputViewModel').mockReturnValue({ ...VIEW_MODEL_DATA, showInput: false });
        const { getByTestId, queryByText } = render(<ModInputElement {...DEFAULT_PROPS} />);

        expect(getByTestId(TEST_IDS.MODAL_INPUT_MODAL_BUTTONS)).toBeInTheDocument();
        expect(queryByText(VIEW_MODEL_DATA.translations.MOD_INFO)).not.toBeInTheDocument();
    });

    test('Should render correctly (with modal)', () => {
        jest.spyOn(viewModel, 'useModInputViewModel').mockReturnValue(VIEW_MODEL_DATA);
        const { getByTestId, getByText } = render(<ModInputElement {...DEFAULT_PROPS} />);

        expect(getByTestId(TEST_IDS.MODAL_INPUT_MODAL_BUTTONS)).toBeInTheDocument();
        expect(getByText(VIEW_MODEL_DATA.translations.MOD_INFO)).toBeInTheDocument();
    });

    test('Should handle click on "ok button", if current value is ok', () => {
        jest.spyOn(viewModel, 'useModInputViewModel').mockReturnValue(VIEW_MODEL_DATA);
        const { getByText } = render(<ModInputElement {...DEFAULT_PROPS} />);

        act(() => fireEvent.click(getByText(VIEW_MODEL_DATA.translations.OK)));
        expect(VIEW_MODEL_DATA.onConfirm).toBeCalledTimes(1);
    });

    test('Should disable "ok button", if current value is wrong', () => {
        const dataMock = { ...VIEW_MODEL_DATA, isCurrentValueOk: false };
        jest.spyOn(viewModel, 'useModInputViewModel').mockReturnValue(dataMock);
        const { getByText } = render(<ModInputElement {...DEFAULT_PROPS} />);

        act(() => fireEvent.click(getByText(dataMock.translations.OK)));
        expect(dataMock.onConfirm).not.toBeCalled();
    });
});

export {};
