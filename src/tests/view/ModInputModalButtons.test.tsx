import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { TEXTS_EN } from '../../langs/en';
import { DARK_THEME } from '../../styles';
import { ModInputModalButtons } from '../../view/elements/ModInputElement';

const DEFAULT_PROPS = {
    theme: DARK_THEME,
    onRemove: jest.fn(),
    onOpen: jest.fn(),
    currentValue: 11,
    translations: TEXTS_EN,
};

const TEST_ID = 'ModInputModalButtons_testId';

describe('ModInputModalButtons', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Should render correctly', () => {
        const { getByTestId, getByText, container } = render(<ModInputModalButtons {...DEFAULT_PROPS} />);
        const text = `${DEFAULT_PROPS.translations.MOD_INFO} (${DEFAULT_PROPS.currentValue})`;

        expect(getByTestId(TEST_ID)).toBeInTheDocument();
        expect(getByText(text)).toBeInTheDocument();
        expect(container.querySelector('.anticon-delete')).toBeInTheDocument();
    });

    test('Should call onOpen when open button is clicked', () => {
        const { getByText } = render(<ModInputModalButtons {...DEFAULT_PROPS} />);
        const text = `${DEFAULT_PROPS.translations.MOD_INFO} (${DEFAULT_PROPS.currentValue})`;

        act(() => fireEvent.click(getByText(text)));
        expect(DEFAULT_PROPS.onOpen).toBeCalledTimes(1);
    });

    test('Should call onRemove when remove button is clicked', () => {
        const { container } = render(<ModInputModalButtons {...DEFAULT_PROPS} />);

        act(() => fireEvent.click(container.querySelector('.anticon-delete')!));
        expect(DEFAULT_PROPS.onRemove).toBeCalledTimes(1);
    });
});

export {};
