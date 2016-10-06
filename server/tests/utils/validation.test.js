const expect = require('expect');

let {isRealString} = require('./../../utils/validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        const res = isRealString(99);
        expect(res).toBe(false);
    });

    it('should reject string with only spaces', () => {
        const res = isRealString('    ');
        expect(res).toBe(false);
    });

    it('should allow strings with non-space characters', () => {
        const res = isRealString('Developers');
        expect(res).toBe(true);
    });
});