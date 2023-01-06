/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Layout, ConfigProvider, Alert } from 'antd';
import { DEFAULTS } from '../../defaults';
import { TTheme } from '../../types';
import { usePageViewModel } from '../../viewModels';
import { ChangeAppLangElement } from './ChangeAppLangElement';
import { RollsElement } from './RollsElement';
import { ThemeButtonElement } from './ThemeButtonElement';

const { Header, Content, Footer } = Layout;

export const Page = () => {
    const { theme, translations, antdTheme } = usePageViewModel();
    const themedStyles = styles(theme);

    return (
        <ConfigProvider theme={antdTheme}>
            <Layout>
                <Header css={themedStyles.header}>
                    <div css={themedStyles.logo}>{translations.APP_NAME}</div>
                    <ChangeAppLangElement />
                </Header>

                {DEFAULTS.STILL_IN_DEVELOPMENT && (
                    <Alert type="info" closable description={translations.DEV_INFO} css={themedStyles.alert} />
                )}

                <Content css={themedStyles.wrapper}>
                    <section>
                        <div css={themedStyles.theme}>
                            <ThemeButtonElement />
                        </div>

                        <RollsElement />
                    </section>
                </Content>

                <Footer css={themedStyles.footer}>
                    {translations.AUTHOR} {new Date().getFullYear()}
                </Footer>
            </Layout>
        </ConfigProvider>
    );
};

const headerHeight = 64;
const footerHeight = 63;

const styles = (theme: TTheme) => ({
    wrapper: css`
        &.ant-layout-content {
            padding: ${4 * theme.baseSpace}px ${2 * theme.baseSpace}px;
            min-height: calc(100vh - ${headerHeight}px - ${footerHeight}px);
        }
    `,
    logo: css`
        font-weight: 700;
    `,
    alert: css`
        margin: ${2 * theme.baseSpace}px;
    `,
    footer: css`
        &.ant-layout-footer {
            font-size: ${0.8 * theme.fontSize}px;
            height: ${footerHeight}px;
            padding-left: ${2 * theme.baseSpace}px;
        }
    `,
    theme: css`
        display: flex;
        justify-content: flex-end;
        margin-bottom: ${5 * theme.baseSpace}px;
    `,
    header: css`
        &.ant-layout-header {
            display: flex;
            justify-content: space-between;
            padding-inline: 0;
            padding: 0 ${2 * theme.baseSpace}px;
            background: ${theme.secondary};
        }
    `,
});
