/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Modal, Table } from 'antd';
import { TTheme } from '../../types';
import { useFateLeaderModalViewModel } from '../../viewModels';
import { ModalFooter, TextButton } from '../elements';

export const HIGHLIGHT_CLASS = 'testClass';

type Props = {
    rollValue?: number;
};

export const FateLeaderElement: React.FC<Props> = ({ rollValue }) => {
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
                        rowClassName={(record) => (record.value === rollValue ? HIGHLIGHT_CLASS : '')}
                        bordered={false}
                    />
                </div>
            </Modal>
        </>
    );
};

const styles = (theme: TTheme) => ({
    table: css`
        .${HIGHLIGHT_CLASS} {
            background-color: ${theme.primary};
            color: ${theme.background};
        }

        .ant-table-tbody > tr.ant-table-row.${HIGHLIGHT_CLASS}:hover > td {
            background-color: ${theme.primary};
            color: ${theme.background};
        }

        .ant-table-cell {
            font-size: ${theme.smallFontSize}px;
        }

        .ant-table-tbody > tr.ant-table-row:hover > td {
            color: ${theme.primary};
        }

        .ant-table-cell {
            border-radius: 0 !important;
        }
    `,
});
