/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Layout, ConfigProvider, Col, Row } from 'antd';
import { TTheme } from '../../types';
import { usePageViewModel } from '../../viewModels';
import { AppHeader } from './AppHeader';
import { FooterElement, footerHeight } from './FooterElement';
import { MainContent } from './MainContent';

const { Content } = Layout;

const columns = {
    xs: 24,
    sm: 24,
    md: 24,
    lg: 20,
    xl: 18,
    xxl: 12,
};

export const Page = () => {
    const { theme, translations, antdTheme } = usePageViewModel();
    const themedStyles = styles(theme);

    return (
        <ConfigProvider theme={antdTheme}>
            <Layout>
                <AppHeader theme={theme} translations={translations} />

                <Content css={themedStyles.wrapper}>
                    <section>
                        <Row justify="center">
                            <Col {...columns}>
                                <div css={themedStyles.mainWrapper}>
                                    <MainContent />
                                </div>
                            </Col>
                        </Row>
                    </section>
                </Content>

                <FooterElement />
            </Layout>
        </ConfigProvider>
    );
};

const headerHeight = 64;
const summaryHeight = headerHeight + footerHeight;

const styles = (theme: TTheme) => ({
    wrapper: css`
        &.ant-layout-content {
            padding: ${4 * theme.baseSpace}px ${2 * theme.baseSpace}px;
            min-height: calc(100vh - ${summaryHeight}px);
            background: ${theme.pageBackground};
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
