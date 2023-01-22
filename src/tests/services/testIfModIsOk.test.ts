import { testIfModIsOk } from '../../services';

describe('testIfModIsOk', () => {
    describe('Should handle number ', () => {
        const testCase = (value: string) => {
            const result = testIfModIsOk(value);
            expect(result).toBeTruthy();
        };

        test('with "+"', () => {
            const value = '+2';
            testCase(value);
        });

        test('with "-"', () => {
            const value = '-11';
            testCase(value);
        });

        test('with no "+" or "-', () => {
            const value = '6';
            testCase(value);
        });
    });

    describe('Should not handle number... ', () => {
        const testCase = (value: string) => {
            const result = testIfModIsOk(value);
            expect(result).toBeFalsy();
        };

        test('with letters at the end', () => {
            const value = '+2aaB';
            testCase(value);
        });

        test('with letters at the start', () => {
            const value = 'AaBc+2';
            testCase(value);
        });

        test('with letters in the middle', () => {
            const value = '+BcDg2';
            testCase(value);
        });

        test('with letters in the middle', () => {
            const value = 'Bc+2Df';
            testCase(value);
        });

        test('with non-numeric signs', () => {
            const value = '+2aa B';
            testCase(value);
        });
    });
});

export {};
