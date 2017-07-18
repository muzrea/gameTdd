/**
 * Created by muzrea on 17-7-18.
 */
'use strict';
var Sum = require('./sum.js')

describe('workshop', () => {
    it('test sample', () => {
        const a=1;
        const b=3;
        const c=4;
        expect(sum(a,b)).toEqual(c);
    });
});