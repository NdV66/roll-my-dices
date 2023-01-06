/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { DEFAULTS } from '../../defaults';

import { TTheme } from '../../types';
import { useRollsElementViewModel } from '../../viewModels';

export const RollsElement: React.FC = () => {
    const { roll, rollsElementData, theme } = useRollsElementViewModel();
    const themedStyles = styles(theme);

    return (
        <div>
            {rollsElementData.map((el) => (
                <div key={el.key} onClick={el.roll} css={themedStyles.rollButton} role="button">
                    {el.title}
                </div>
            ))}

            {roll !== DEFAULTS.EMPTY_ROLL_RESULT && <div>{roll}</div>}
        </div>
    );
};

const styles = (theme: TTheme) => ({
    rollButton: css`
        cursor: pointer;
        padding: 20px;
        margin: 20px;
        background: red;
    `,
    rollResult: css``,
});
