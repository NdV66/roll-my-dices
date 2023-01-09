/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Layout } from 'antd';
import { DEFAULTS } from '../../defaults';
import { TTheme } from '../../types';
import { useFooterViewModel } from '../../viewModels';

const { Footer } = Layout;

export const FooterElement = () => {
    const { theme, translations, version } = useFooterViewModel();
    const themedStyles = styles(theme);

    return (
        <Footer css={themedStyles.footer}>
            <span>
                v{version}, {translations.AUTHOR} {new Date().getFullYear()}
            </span>
            <a href={DEFAULTS.REPO_URL} css={themedStyles.link} target="_blank" rel="noopener noreferrer">
                {translations.REPO}
            </a>
        </Footer>
    );
};

export const footerHeight = 63;

const styles = (theme: TTheme) => ({
    link: css`
        &:visited,
        &:link,
        &:hover,
        &:active {
            color: ${theme.primary};
        }
    `,
    footer: css`
        display: flex;
        justify-content: space-between;
        align-content: center;

        &.ant-layout-footer {
            font-size: ${0.8 * theme.fontSize}px;
            height: ${footerHeight}px;
            padding-left: ${2 * theme.baseSpace}px;
        }
    `,
});
