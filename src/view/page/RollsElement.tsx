/** @jsxImportSource @emotion/react */

import { DICES_ORDER } from '../../defaults';
import { useRollsElementViewModel } from '../../viewModels';
import { NoRollResult } from '../elements';
import { CommonRollResult } from '../elements/RollsElement';
import { RollsHeader } from '../elements/RollsElement/RollsHeader';
import { resultStyles } from '../elements/RollsElement/styles';

export const RollsElement: React.FC = () => {
    const { rollsElementData, theme, rollInfo, translations } = useRollsElementViewModel(DICES_ORDER);
    const themedStyles = resultStyles(theme);

    return (
        <>
            <RollsHeader rollsElementData={rollsElementData} theme={theme} translations={translations} />

            <div css={themedStyles.result}>
                {rollInfo ? <CommonRollResult {...rollInfo} theme={theme} /> : <NoRollResult theme={theme} />}
            </div>
        </>
    );
};
