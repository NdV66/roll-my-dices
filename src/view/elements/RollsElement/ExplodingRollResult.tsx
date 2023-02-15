/** @jsxImportSource @emotion/react */
import { DEFAULTS } from '../../../defaults';
import { TExplodingRollInfo, TTheme } from '../../../types';
import { RollModCalculation } from '../RollModCalculation';
import { resultStyles } from './styles';

type Props = TExplodingRollInfo & {
    theme: TTheme;
};

export const ExplodingRollResult: React.FC<Props> = ({ theme, dice, mod, calculationResult, displayValues }) => {
    const themedStyles = resultStyles(theme);
    const isMoreThanDefaultLength = displayValues.length > DEFAULTS.EXPLODING_ROLL_MIN_DICE_NUMBER;

    return (
        <div css={themedStyles.result} data-test-id="ExplodingRollResult_testId">
            {displayValues.map((value, index) => (
                <div key={`${value}_${index}`} css={themedStyles.rawRollResult(dice)}>
                    {value}
                </div>
            ))}

            {(isMoreThanDefaultLength || mod !== DEFAULTS.MOD) && (
                <RollModCalculation mod={mod} calculationResult={calculationResult} theme={theme} />
            )}
        </div>
    );
};
