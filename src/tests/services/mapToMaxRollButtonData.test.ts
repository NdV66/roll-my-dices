import { Observable } from 'rxjs';
import * as diceTools from '../../services/dices.service';
import { mapToMaxRollButtonData } from '../../services';
import { DiceTypes, IRollModel, TRollExtended } from '../../types';

const sign = 'x';
const diceType = DiceTypes.D_4;
const dicesOrder = [diceType];

class RollModelMock implements IRollModel<TRollExtended> {
    rollModSource = new Observable<number>();
    extendedRollSource = new Observable<TRollExtended | null>();

    rollDice = jest.fn();
    cleanAll = jest.fn();
    updateRollMod = jest.fn();
}

describe('mapToMaxRollButtonData', () => {
    let rollModelMock: RollModelMock;

    beforeEach(() => {
        jest.clearAllMocks();
    });

    beforeEach(() => {
        rollModelMock = new RollModelMock();

        jest.spyOn(diceTools, 'mapRollToDice').mockReturnValue(sign);
    });

    test('Should prepare rollsElementData', () => {
        const result = mapToMaxRollButtonData(dicesOrder, rollModelMock);

        const expectedValue = [
            {
                diceType,
                roll: expect.any(Function),
                displayValue: sign,
            },
        ];

        expect(result).toEqual(expectedValue);
    });

    test('Should call roll from model', () => {
        const result = mapToMaxRollButtonData(dicesOrder, rollModelMock);
        result[0].roll();

        expect(rollModelMock.rollDice).toBeCalledWith(diceType);
    });
});

export {};
