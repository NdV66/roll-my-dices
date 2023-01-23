/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Button } from 'antd';

import { useFateElementViewModel } from '../../viewModels/useFateElementViewModel';

export const FateElement: React.FC = () => {
    const { translations, rollDie, roll } = useFateElementViewModel();
    const themedStyles = styles();

    return (
        <div css={themedStyles.wrapper}>
            <div>{translations.APP_NAME}</div>
            <div>{roll?.allRolls}</div>
            <div>MOD: {roll?.mod}</div>
            <div>RESULT: {roll?.calculationResult}</div>
            <Button onClick={rollDie}>roll fate TEST</Button>
        </div>
    );
};

const styles = () => ({
    wrapper: css`
        display: flex;
        justify-content: center;
        align-items: center;
    `,
});
