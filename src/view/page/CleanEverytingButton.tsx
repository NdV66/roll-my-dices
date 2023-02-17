/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { TEST_IDS } from '../../defaults';
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
        <div css={themedStyles.cleanWrapper} data-test-id={TEST_IDS.CLEAN_EVERYTHING_BUTTON}>
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
