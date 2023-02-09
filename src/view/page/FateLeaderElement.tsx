/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Modal, Table } from 'antd';
import { TTheme } from '../../types';
import { useFateLeaderModalViewModel } from '../../viewModels';
import { ModalFooter, TextButton, WarningParagraph } from '../elements';

export const HIGHLIGHT_CLASS = 'currentRoll';

type Props = {
    calculationResult: number | null;
};

export const FateLeaderElement: React.FC<Props> = ({ calculationResult }) => {
    const {
        translations,
        onOpenModal,
        onCloseModal,
        showFateLeader,
        theme,
        translatedColumns,
        translatedLeaderData,
        isRollOutOfScope,
    } = useFateLeaderModalViewModel(calculationResult);
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
                    {isRollOutOfScope && calculationResult !== null && (
                        <WarningParagraph theme={theme} align="right">
                            {translations.FATE_LEADER_TITLE_WARNING}
                        </WarningParagraph>
                    )}

                    <Table
                        css={themedStyle.table}
                        size="middle"
                        pagination={false}
                        columns={translatedColumns}
                        dataSource={translatedLeaderData}
                        loading={!translatedLeaderData}
                        rowClassName={(record) => (record.value === calculationResult ? HIGHLIGHT_CLASS : '')}
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
            font-weight: 700;
        }

        .ant-table-tbody > tr.ant-table-row:hover > td {
            color: ${theme.primary};
        }

        .ant-table-cell {
            border-radius: 0 !important;
        }
    `,
});
