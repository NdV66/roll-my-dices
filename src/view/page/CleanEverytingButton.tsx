/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { useCleanEverythingModel } from '../../viewModels/useCleanEverythingModel';
import { TextButton } from '../elements';

export const CleanEverythingButton: React.FC = () => {
    const { theme, onCleanAll, translations } = useCleanEverythingModel();
    const themedStyles = styles();

    return (
        <div css={themedStyles.cleanWrapper}>
            <TextButton theme={theme} onClick={onCleanAll} small>
                {translations.CLEAN}
            </TextButton>
        </div>
    );
};

const styles = () => ({
    cleanWrapper: css`
        display: flex;
        justify-content: flex-end;
    `,
});
