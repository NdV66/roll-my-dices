/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Layout, ConfigProvider, Alert } from 'antd';
import { DEFAULTS } from '../../defaults';
import { TTheme } from '../../types';
import { usePageViewModel } from '../../viewModels';
import { ChangeAppLangElement } from './ChangeAppLangElement';
import { FooterElement, footerHeight } from './FooterElement';
import { ModInputElement } from './ModInputElement';
import { RollsElement } from './RollsElement';
import { ThemeButtonElement } from './ThemeButtonElement';

const { Header, Content } = Layout;

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
                    <Alert type="info" description={translations.DEV_INFO} css={themedStyles.alert} />
                )}

                <Content css={themedStyles.wrapper}>
                    <section>
                        <div css={themedStyles.theme}>
                            <ThemeButtonElement />
                        </div>

                        <ModInputElement />
                        <RollsElement />
                    </section>
                </Content>

                <FooterElement />
            </Layout>
        </ConfigProvider>
    );
};

const headerHeight = 64;
const alertHeight = 66;

const summaryHeight = headerHeight + footerHeight;

const styles = (theme: TTheme) => ({
    wrapper: css`
        &.ant-layout-content {
            padding: ${4 * theme.baseSpace}px ${2 * theme.baseSpace}px;
            min-height: calc(
                100vh - ${summaryHeight}px -
                    ${DEFAULTS.STILL_IN_DEVELOPMENT ? alertHeight + 2 * 2 * theme.baseSpace : 0}px
            );
        }
    `,
    logo: css`
        font-weight: 700;
    `,
    alert: css`
        margin: ${2 * theme.baseSpace}px;
    `,
    theme: css`
        display: flex;
        justify-content: flex-end;
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
