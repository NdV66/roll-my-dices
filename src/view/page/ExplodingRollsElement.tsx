/** @jsxImportSource @emotion/react */

import { DICES_ORDER } from '../../defaults';
import { useExplodingRollsElementViewModel } from '../../viewModels';
import { NoRollResult } from '../elements';
import { RollsHeader } from '../elements/RollsElement';
import { ExplodingRollResult } from '../elements/RollsElement/ExplodingRollResult';
import { resultStyles } from '../elements/RollsElement/styles';

export const ExplodingRollsElement: React.FC = () => {
    const { rollsElementData, theme, rollInfo, translations } = useExplodingRollsElementViewModel(DICES_ORDER);
    const themedStyles = resultStyles(theme);

    return (
        <>
            <RollsHeader rollsElementData={rollsElementData} theme={theme} translations={translations} />

            <div css={themedStyles.result}>
                {rollInfo ? <ExplodingRollResult {...rollInfo} theme={theme} /> : <NoRollResult theme={theme} />}
            </div>
        </>
    );
};
