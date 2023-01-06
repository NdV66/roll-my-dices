/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Layout, ConfigProvider } from 'antd';
import { COMMONS } from '../../styles/commons';
import { usePageViewModel } from '../../viewModels';
import { ChangeAppLangElement } from './ChangeAppLangElement';
import { RollsElement } from './RollsElement';
import { ThemeButtonElement } from './ThemeButtonElement';

const { Header, Content, Footer } = Layout;

export const Page = () => {
    const { theme } = usePageViewModel();

    // console.log('Rerender full page');

    return (
        <ConfigProvider theme={theme}>
            <Layout>
                <Header>
                    <div>LOGO</div>
                    <ChangeAppLangElement />
                </Header>

                <Content css={styles.wrapper}>
                    <section>
                        <ThemeButtonElement />
                        <RollsElement />
                    </section>
                </Content>

                <Footer>footer</Footer>
            </Layout>
        </ConfigProvider>
    );
};

const styles = {
    wrapper: css`
        padding: ${2 * COMMONS.baseSpace}px;
    `,
};
