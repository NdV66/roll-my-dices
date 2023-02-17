/** @jsxImportSource @emotion/react */

import { DEFAULTS, TEST_IDS } from '../../../defaults';

import { TRollInfo, TTheme } from '../../../types';
import { RollModCalculation } from '../RollModCalculation';
import { resultStyles } from './styles';

type Props = TRollInfo & {
    theme: TTheme;
};

export const CommonRollResult: React.FC<Props> = ({ theme, dice, mod, calculationResult, displayValue }) => {
    const themedStyles = resultStyles(theme);

    return (
        <div css={themedStyles.result} data-test-id={TEST_IDS.COMMON_ROLL_RESULT}>
            <div css={themedStyles.rawRollResult(dice)}>{displayValue}</div>
            {mod !== DEFAULTS.MOD && (
                <RollModCalculation mod={mod} calculationResult={calculationResult} theme={theme} />
            )}
        </div>
    );
};
