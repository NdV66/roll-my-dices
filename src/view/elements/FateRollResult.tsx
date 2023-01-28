/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Col, Row } from 'antd';

import { DEFAULTS, FONT_FAMILY_BY_DICE_TYPE } from '../../defaults';
import { mapFateToDice } from '../../services';
import { screenMd } from '../../styles';
import { DiceTypes, TFateRollExtended, TTheme } from '../../types';
import { RollModCalculation } from './RollModCalculation';

type Props = TFateRollExtended & {
    theme: TTheme;
};

export const FateRollResult: React.FC<Props> = ({ theme, dice, mod, calculationResult, allRolls, roll }) => {
    const themedStyles = styles(theme);

    return (
        <Row justify="center" align="middle">
            <Col span={24}>
                <div css={themedStyles.center}>
                    {allRolls.map((el, index) => (
                        <div css={themedStyles.rollResult(dice)} key={`${el}_${index}`}>
                            {mapFateToDice(el)}
                        </div>
                    ))}
                </div>
            </Col>

            <Col>
                <div css={themedStyles.center}>
                    <span css={themedStyles.rawResult}>({roll})</span>
                    {mod !== DEFAULTS.MOD && (
                        <RollModCalculation mod={mod} calculationResult={calculationResult} theme={theme} />
                    )}
                </div>
            </Col>
        </Row>
    );
};

const styles = (theme: TTheme) => ({
    center: css`
        justify-content: center;
        display: flex;
        align-items: center;
    `,
    wrapper: css`
        user-select: none;
    `,
    rollResult: (diceType: DiceTypes) => css`
        font-family: ${FONT_FAMILY_BY_DICE_TYPE[diceType]};
        font-size: ${6 * theme.fontSize}px;
        color: ${theme.primary};

        width: 90px;
        height: 90px;

        display: flex;
        justify-content: flex-start;
        align-items: center;

        ${screenMd(css`
            font-size: ${4 * theme.fontSize}px;

            width: 60px;
            height: 60px;
        `)}
    `,
    rawResult: () => css`
        font-size: ${3.5 * theme.fontSize}px;
        color: ${theme.primary};

        ${screenMd(css`
            font-size: ${2 * theme.fontSize}px;
        `)}
    `,
});
