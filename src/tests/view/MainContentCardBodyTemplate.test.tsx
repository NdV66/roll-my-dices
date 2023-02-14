import { render } from '@testing-library/react';
import { configure } from '@testing-library/dom';

import { MainContentCardBodyTemplate } from '../../view/elements';
import { DARK_THEME } from '../../styles';
import { MainContentTab } from '../../types';

configure({
    testIdAttribute: 'data-test-id',
});

const DEFAULT_PROPS = {
    activeMainTab: MainContentTab.CLASSIC_D20,
    theme: DARK_THEME,
};

const TEST_ID = 'MainContentCardBodyTemplate_testId';

describe('MainContentCardBodyTemplate', () => {
    test('Should render correctly', () => {
        const { getByTestId } = render(<MainContentCardBodyTemplate {...DEFAULT_PROPS} />);
        const element = getByTestId(TEST_ID);

        expect(element).toBeInTheDocument();
    });
});

export {};
