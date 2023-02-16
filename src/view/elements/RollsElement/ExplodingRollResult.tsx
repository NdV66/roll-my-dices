/** @jsxImportSource @emotion/react */
import { DEFAULTS } from '../../../defaults';
import { TExplodingRollInfo, TTheme } from '../../../types';
import { RollModCalculation } from '../RollModCalculation';
import { resultStyles } from './styles';

type Props = TExplodingRollInfo & {
    theme: TTheme;
};

export const ExplodingRollResult: React.FC<Props> = ({
    theme,
    dice,
    mod,
    calculationResult,
    displayValues,
    isExploding,
}) => {
    const themedStyles = resultStyles(theme);

    return (
        <div css={themedStyles.result} data-test-id="ExplodingRollResult_testId">
            {displayValues.map((value, index) => (
                <div key={`${value}_${index}`} css={themedStyles.rawRollResult(dice)}>
                    {value}
                </div>
            ))}

            {(isExploding || mod !== DEFAULTS.MOD) && (
                <RollModCalculation mod={mod} calculationResult={calculationResult} theme={theme} />
            )}
        </div>
    );
};
