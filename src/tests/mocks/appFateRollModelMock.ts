import { Observable } from 'rxjs';

export const appFateRollModelMock = () => ({
    rollModSource: new Observable(),
    extendedRollSource: new Observable(),

    rollDice: jest.fn(),
    cleanAll: jest.fn(),
    updateRollMod: jest.fn(),
    getMaxByDiceType: jest.fn(),
});
