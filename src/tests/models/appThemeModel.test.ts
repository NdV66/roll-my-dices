import { concatMap, delay, map, of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

// const getTestObservable = () =>
//     of('Irmo', 'Namo').pipe(
//         map((el) => of(el + ' <3').pipe(delay(1000))),
//         concatMap((el) => el),
//     );

const getTestObservable = () => of('Irmo');

// const expectedValues = { a: 'Irmo <3', b: 'Namo <3', c: 'Nienna <3' };
// const expectedMarbles = '-a-b-(c|)';

const expectedValues = { a: 'Irmo', b: 'Namo', c: 'Nienna' };
const expectedMarbles = '-a|';

describe('AppThemeModel', () => {
    let testScheduler: TestScheduler;

    beforeEach(() => {
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });

    it('test', () => {
        testScheduler.run((helpers) => {
            const { cold, expectObservable } = helpers;
            const source$ = cold('-a-b-c|', expectedValues);
            const expected = '-a-b-c|';

            expectObservable(source$).toBe(expected, expectedValues);
        });
    });
});

export {};

// import { firstValueFrom, lastValueFrom } from 'rxjs';
// import { AppThemeModel } from '../../models/AppThemeModel';
// import { AppTheme } from '../../types';

// describe('AppThemeModel', () => {
//     test('Should change app theme', async () => {
//         const model = new AppThemeModel();
//         const expectedTheme = AppTheme.DARK;

//         model.changeAppTheme(expectedTheme);

//         const x = await firstValueFrom(model.theme);
//         console.log('>>>', x);
//     });
// });

// export {};
