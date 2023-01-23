/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';

import { Button } from 'antd';
import { useFateElementViewModel } from '../../viewModels/useFateElementViewModel';

export const FateElement: React.FC = () => {
    const { translations, rollDie } = useFateElementViewModel();
    // const themedStyles = styles(theme);

    return (
        <>
            <div>{translations.APP_NAME}</div>

            <Button onClick={rollDie}>test</Button>
        </>
    );
};

// const styles = (theme: TTheme) => ({
//     result: css`
//         display: flex;
//         justify-content: center;
//         align-items: center;

//         margin: ${4 * theme.baseSpace}px 0;
//     `,

// });
