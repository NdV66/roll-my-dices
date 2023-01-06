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
            />
        </>
    );
};

const styles = (theme: TTheme) => ({
    menu: css`
        background: none;
        width: 160px;
        display: flex;
        justify-content: center;
    `,
});
