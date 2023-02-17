/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Menu } from 'antd';
import { useChangeLangElementViewModel } from '../../viewModels/useChangeLangElementViewModel';

export const ChangeAppLangElement = () => {
    const { onClickItem, appLang, items } = useChangeLangElementViewModel();
    const themedStyles = styles();

    return (
        <Menu
            mode="horizontal"
            items={items}
            selectedKeys={[appLang]}
            onClick={onClickItem}
            css={themedStyles.menu}
            data-test-id="ChangeAppLangElement_testId"
        />
    );
};

const styles = () => ({
    menu: css`
        background: none;
        width: 180px;
        display: flex;
        justify-content: center;
    `,
});
