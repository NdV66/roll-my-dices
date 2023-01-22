/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Layout } from 'antd';

import { TTheme, TTranslations } from '../../types';
import { ChangeAppLangElement } from './ChangeAppLangElement';

const { Header } = Layout;

type Props = {
    theme: TTheme;
    translations: TTranslations;
};

export const AppHeader: React.FC<Props> = ({ theme, translations }) => {
    const themedStyles = styles(theme);

    return (
        <Header css={themedStyles.header}>
            <div css={themedStyles.logo}>{translations.APP_NAME}</div>
            <ChangeAppLangElement />
        </Header>
    );
};

const styles = (theme: TTheme) => ({
    logo: css`
        font-weight: 700;
    `,
    header: css`
        &.ant-layout-header {
            display: flex;
            justify-content: space-between;
            padding-inline: 0;
            padding: 0 ${2 * theme.baseSpace}px;
            background: ${theme.accent};
            color: ${theme.background};
        }
    `,
});
