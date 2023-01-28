/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { MainContentTab } from '../../types';

import { useCleanEverythingModel } from '../../viewModels/useCleanEverythingModel';
import { TextButton } from '../elements';

type Props = {
    activeMainTab: MainContentTab;
};

export const CleanEverythingButton: React.FC<Props> = ({ activeMainTab }) => {
    const { theme, onCleanAll, translations, disabled } = useCleanEverythingModel(activeMainTab);
    const themedStyles = styles();

    return (
        <div css={themedStyles.cleanWrapper}>
            <TextButton theme={theme} onClick={onCleanAll} small disabled={disabled}>
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
