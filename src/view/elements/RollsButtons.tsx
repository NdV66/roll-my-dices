import { TTheme } from '../../types';
import { TRollButtonData } from '../../viewModels';
import { DiceButton } from '.';

type Props = {
    theme: TTheme;
    buttons: TRollButtonData[];
};

export const RollsButtons: React.FC<Props> = ({ theme, buttons }) => (
    <>
        {buttons.map((el) => (
            <DiceButton
                key={el.diceType}
                onClick={el.roll}
                theme={theme}
                diceType={el.diceType}
                displayValue={el.displayValue}
            />
        ))}
    </>
);
