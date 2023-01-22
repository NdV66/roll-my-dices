/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Layout, ConfigProvider } from 'antd';
import { DEFAULTS } from '../../defaults';
import { TTheme } from '../../types';
import { usePageViewModel } from '../../viewModels';
import { AppHeader } from './AppHeader';
import { FooterElement, footerHeight } from './FooterElement';
import { MainContent } from './MainContent';
import { ThemeButtonElement } from './ThemeButtonElement';

const { Content } = Layout;

export const Page = () => {
    const { theme, translations, antdTheme } = usePageViewModel();
    const themedStyles = styles(theme);

    return (
        <ConfigProvider theme={antdTheme}>
            <Layout>
                <AppHeader theme={theme} translations={translations} />

                <Content css={themedStyles.wrapper}>
                    <section>
                        <div css={themedStyles.theme}>
                            <ThemeButtonElement />
                        </div>

                        <div css={themedStyles.mainWrapper}>
                            <MainContent />
                        </div>
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
    theme: css`
        display: flex;
        justify-content: flex-end;
    `,
    mainWrapper: css`
        padding: ${4 * theme.baseSpace}px 0 0 0;
    `,
});
