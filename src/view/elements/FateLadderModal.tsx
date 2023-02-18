/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Modal, Table } from 'antd';
import { TEST_IDS } from '../../defaults';
import { TTheme, TTranslateLadderData, TTranslations, TTranslateLadderColumn } from '../../types';
import { ModalFooter, WarningParagraph } from '../elements';

export const HIGHLIGHT_CLASS = 'currentRoll';

type Props = {
    calculationResult: number | null;
    onCloseModal: () => void;
    showFateLadder: boolean;
    translations: TTranslations;
    theme: TTheme;
    isRollOutOfScope: boolean;
    columns: TTranslateLadderColumn[];
    dataSource?: TTranslateLadderData[];
};

export const FateLadderModal: React.FC<Props> = ({
    calculationResult,
    onCloseModal,
    showFateLadder,
    translations,
    theme,
    isRollOutOfScope,
    columns,
    dataSource,
}) => {
    const themedStyle = styles(theme);

    return (
        <Modal
            onCancel={onCloseModal}
            open={showFateLadder}
            title={translations.FATE_LEADER_TITLE}
            footer={<ModalFooter onCancel={onCloseModal} translations={translations} theme={theme} />}
            data-test-id={TEST_IDS.FATE_LADDER_MODAL}
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
                    columns={columns}
                    dataSource={dataSource}
                    loading={!dataSource}
                    rowClassName={(record) => (record.value === calculationResult ? HIGHLIGHT_CLASS : '')}
                    bordered={false}
                    data-test-id={TEST_IDS.FATE_LADDER_MODAL_TABLE}
                />
            </div>
        </Modal>
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
