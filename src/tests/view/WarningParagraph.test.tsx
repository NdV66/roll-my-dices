import { render } from '@testing-library/react';

import { DARK_THEME } from '../../styles';
import { WarningParagraph } from '../../view/elements';

const DEFAULT_PROPS = {
    theme: DARK_THEME,
};

const TEST_ID = 'WarningParagraph_testId';
const TEXT = 'lotr';

describe('WarningParagraph', () => {
    test('Should render correctly', () => {
        const { getByTestId } = render(<WarningParagraph {...DEFAULT_PROPS}>{TEXT}</WarningParagraph>);
        const element = getByTestId(TEST_ID);

        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent(TEXT);
    });

    test('Should be antd warning paragraph', () => {
        const { getByTestId } = render(<WarningParagraph {...DEFAULT_PROPS} />);
        const element = getByTestId(TEST_ID);
        expect(element).toHaveClass('ant-typography-warning');
    });
});

export {};
