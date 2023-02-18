import { render } from '@testing-library/react';

import { ModalFooter } from '../../view/elements';
import { DARK_THEME } from '../../styles';
import { TEXTS_EN } from '../../langs/en';
import { TEST_IDS } from '../../defaults';

const DEFAULT_PROPS = {
    translations: TEXTS_EN,
    onCancel: jest.fn(),
    theme: DARK_THEME,
};

describe('ModalFooter', () => {
    test('Should render correctly', () => {
        const { getByTestId } = render(<ModalFooter {...DEFAULT_PROPS} />);
        const element = getByTestId(TEST_IDS.MODAL_FOOTER);

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
