import { render } from '@testing-library/react';

import { ModalFooter } from '../../view/elements';
import { DARK_THEME } from '../../styles';
import { TEXTS_EN } from '../../langs/en';

const DEFAULT_PROPS = {
    translations: TEXTS_EN,
    onCancel: jest.fn(),
    theme: DARK_THEME,
};

const TEST_ID = 'ModalFooter_testId';

describe('ModalFooter', () => {
    test('Should render correctly', () => {
        const { getByTestId } = render(<ModalFooter {...DEFAULT_PROPS} />);
        const element = getByTestId(TEST_ID);

        expect(element).toBeInTheDocument();
    });

    test('Should render translated "OK" button, when there is onConfirm props', () => {
        const { getByText } = render(<ModalFooter {...DEFAULT_PROPS} onConfirm={jest.fn()} />);
        expect(getByText(DEFAULT_PROPS.translations.OK)).toBeInTheDocument();
    });

    test('Should not render translated "OK" button (by default)', () => {
        const { queryByText } = render(<ModalFooter {...DEFAULT_PROPS} />);
        expect(queryByText(DEFAULT_PROPS.translations.OK)).not.toBeInTheDocument();
    });

    test('Should render translated "Cancel" button', () => {
        const { getByText } = render(<ModalFooter {...DEFAULT_PROPS} />);
        expect(getByText(DEFAULT_PROPS.translations.CANCEL)).toBeInTheDocument();
    });
});

export {};
