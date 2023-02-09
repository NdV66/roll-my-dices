/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';

import { DEFAULTS } from '../../../defaults';

import { TExplodingRollInfo, TTheme } from '../../../types';
import { RollModCalculation } from '../RollModCalculation';
import { resultStyles } from './styles';

type Props = TExplodingRollInfo & {
    theme: TTheme;
};

const MIN_DICE_NUMBER = 1;

export const ExplodingRollResult: React.FC<Props> = ({ theme, dice, mod, calculationResult, displayValues }) => {
    const themedStyles = resultStyles(theme);

    return (
        <div css={themedStyles.result}>
            {displayValues.map((value, index) => (
                <div key={`${value}_${index}`} css={themedStyles.rawRollResult(dice)}>
                    {value}
                </div>
            ))}

            {(displayValues.length > MIN_DICE_NUMBER || mod !== DEFAULTS.MOD) && (
                <RollModCalculation mod={mod} calculationResult={calculationResult} theme={theme} />
            )}
        </div>
    );
};
