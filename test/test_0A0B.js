/**
 * Created by muzrea on 17-7-18.
 */
'use strict';
describe('workshop', () => {
    const givenNum = [1,2,3,4];
    it('if you input four different numbers whose position is different from the given numbers,return 0A0B.', () => {
    const numbers = [9,5,6,7]
    const expectedResults =  '0A0B';
    expect(gameResult(numbers)).toEqual(expectedResults);
    });

    it('if you input four different numbers ,one of whose position and number is the same with the given numbers,' +
        'others position or number is different from the other given numbers,return 1A0B.', () => {
    const numbers = [1,5,6,7]
    const expectedResults =  '1A0B';
    expect(gameResult(numbers)).toEqual(expectedResults);
    });

    it('if you input four different numbers ,two of whose position and number is the same with the given numbers,' +
        'others position or number is different from the other given numbers,return 2A0B.', () => {
        const numbers = [1,2,6,7]
        const expectedResults =  '2A0B';
        expect(gameResult(numbers)).toEqual(expectedResults);
    });

    it('if you input four different numbers ,three of whose position and number is the same with the given numbers,' +
        'others number is different from the other given numbers,return 3A0B.', () => {
        const numbers = [1,2,3,8]
        const expectedResults =  '3A0B';
        expect(gameResult(numbers)).toEqual(expectedResults);
    });

    it('if you input four different numbers whose position is different from the given numbers' +
        'but one of those numbers number is the same with the given number,return 0A1B.', () => {
        const numbers = [4,5,6,7]
        const expectedResults =  '0A1B';
        expect(gameResult(numbers)).toEqual(expectedResults);
    });

    it('if you input four different numbers whose position is different from the given numbers' +
        'but two of those numbers number is the same with the given number,return 0A2B.', () => {
        const numbers = [4,5,6,1]
        const expectedResults =  '0A2B';
        expect(gameResult(numbers)).toEqual(expectedResults);
    });
    it('if you input four different numbers whose position is different from the given numbers' +
        'but three of those numbers number is the same with the given number,return 0A3B.', () => {
        const numbers = [4,5,2,1]
        const expectedResults =  '0A3B';
        expect(gameResult(numbers)).toEqual(expectedResults);
    });
    it('if you input four different numbers whose position is different from the given numbers' +
        'but all of those numbers number is the same with the given number,return 0A4B.', () => {
        const numbers = [4,3,2,1]
        const expectedResults =  '0A4B';
        expect(gameResult(numbers)).toEqual(expectedResults);
    });

    it('if you input four different numbers ,one of whose position and number is the same with the given numbers,' +
        'one of whose number is the same with the given numbers, others different ,return 1A1B.', () => {
        const numbers = [1,9,6,3]
        const expectedResults =  '1A1B';
        expect(gameResult(numbers)).toEqual(expectedResults);
    });

    it('if you input four different numbers ,one of whose position and number is the same with the given numbers,' +
        'two of whose number is the same with the given numbers, others different ,return 1A2B.', () => {
        const numbers = [1,4,6,3]
        const expectedResults =  '1A2B';
        expect(gameResult(numbers)).toEqual(expectedResults);
    });

    it('if you input four different numbers ,one of whose position and number is the same with the given numbers,' +
        'three of whose number is the same with the given numbers, others different ,return 1A3B.', () => {
        const numbers = [1,4,2,3]
        const expectedResults =  '1A3B';
        expect(gameResult(numbers)).toEqual(expectedResults);
    });

    it('if you input four different numbers ,two of whose position and number is the same with the given numbers,' +
        'one of whose number is the same with the given numbers, others different ,return 2A1B.', () => {
        const numbers = [1,2,6,3]
        const expectedResults =  '2A1B';
        expect(gameResult(numbers)).toEqual(expectedResults);
    });

    it('if you input four different numbers ,two of whose position and number is the same with the given numbers,' +
        'two of whose number is the same with the given numbers, others different ,return 2A2B.', () => {
        const numbers = [1,2,4,3]
        const expectedResults =  '2A2B';
        expect(gameResult(numbers)).toEqual(expectedResults);
    });

    it('if you input four different numbers whose position and number is the same with the given numbers,return 4A0B.', () => {
        const numbers = [1,2,3,4]
        const expectedResults =  '4A0B';
        expect(gameResult(numbers)).toEqual(expectedResults);
    });
});
