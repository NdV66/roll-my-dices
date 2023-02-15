import { render } from '@testing-library/react';

import { RollModCalculation } from '../../view/elements/RollModCalculation';
import { DARK_THEME } from '../../styles';
import { DEFAULTS } from '../../defaults';

const DEFAULT_PROPS = {
    calculationResult: 6,
    mod: DEFAULTS.MOD,
    theme: DARK_THEME,
};

const TEST_ID = 'RollModCalculation_testId';

describe('RollModCalculation', () => {
    test('Should render correctly', () => {
        const { getByTestId } = render(<RollModCalculation {...DEFAULT_PROPS} />);
        const element = getByTestId(TEST_ID);

        expect(element).toBeInTheDocument();
    });

    test('Should render mod element with +, if mod is 0', () => {
        const mod = 0;
        const { getByText } = render(<RollModCalculation {...DEFAULT_PROPS} mod={mod} />);

        expect(getByText(mod)).toBeInTheDocument();
        expect(getByText('=')).toBeInTheDocument();
        expect(getByText('+')).toBeInTheDocument();
    });

    test('Should render mod element with +, if mod > 0', () => {
        const mod = 2;
        const { getByText } = render(<RollModCalculation {...DEFAULT_PROPS} mod={mod} />);

        expect(getByText(mod)).toBeInTheDocument();
        expect(getByText('=')).toBeInTheDocument();
        expect(getByText('+')).toBeInTheDocument();
    });

    test('Should render mod element with -, if mod < 0', () => {
        const mod = -2;
        const { getByText } = render(<RollModCalculation {...DEFAULT_PROPS} mod={mod} />);

        expect(getByText(2)).toBeInTheDocument();
        expect(getByText('=')).toBeInTheDocument();
        expect(getByText('-')).toBeInTheDocument();
    });
});

export {};
