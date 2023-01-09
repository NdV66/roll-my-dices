/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Menu } from 'antd';
import { TTheme } from '../../types';
import { useChangeLangElementViewModel } from '../../viewModels/useChangeLangElementViewModel';

export const ChangeAppLangElement = () => {
    const { onClickItem, appLang, items, theme } = useChangeLangElementViewModel();
    const themedStyles = styles(theme);

    return (
        <>
            <Menu
                mode="horizontal"
                items={items}
                selectedKeys={[appLang]}
                onClick={onClickItem}
                css={themedStyles.menu}
                color="red"
            />
        </>
    );
};

const styles = (theme: TTheme) => ({
    menu: css`
        background: none;
        width: 180px;
        display: flex;
        justify-content: center;

        //TODO
        // color: ${theme.background};

        // &.ant-menu > .ant-menu-item:hover,
        // &.ant-menu > .ant-menu-submenu:hover,
        // &.ant-menu > .ant-menu-item-active,
        // &.ant-menu > .ant-menu-submenu-active,
        // &.ant-menu > .ant-menu-item-open,
        // &.ant-menu > .ant-menu-submenu-open,
        // &.ant-menu > .ant-menu-item-selected,
        // &.ant-menu > .ant-menu-submenu-selected {
        //     color: ${theme.background} !important;
        //     border: none !important;
        //     font-weight: 700;
        // }
    `,
});
