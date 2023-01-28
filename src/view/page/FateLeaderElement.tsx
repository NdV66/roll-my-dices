/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Modal, Table } from 'antd';
import { TTheme } from '../../types';
import { useFateLeaderModalViewModel } from '../../viewModels';
import { ModalFooter, TextButton } from '../elements';

export const FateLeaderElement: React.FC = () => {
    const { translations, onOpenModal, onCloseModal, showFateLeader, theme, translatedColumns, translatedLeaderData } =
        useFateLeaderModalViewModel();
    const themedStyle = styles(theme);

    return (
        <>
            <TextButton onClick={onOpenModal} theme={theme} small>
                {translations.FATE_LEADER_TITLE}
            </TextButton>

            <Modal
                onCancel={() => onCloseModal()}
                open={showFateLeader}
                title={translations.FATE_LEADER_TITLE}
                footer={
                    <ModalFooter onCancel={onCloseModal} translations={translations} theme={theme} showOk={false} />
                }
            >
                <div>
                    <Table
                        css={themedStyle.table}
                        size="middle"
                        pagination={false}
                        columns={translatedColumns}
                        dataSource={translatedLeaderData}
                        loading={!translatedLeaderData}
                    />
                </div>
            </Modal>
        </>
    );
};

const styles = (theme: TTheme) => ({
    table: css`
        .ant-table-cell {
            font-size: ${theme.smallFontSize}px;
        }
    `,
});
