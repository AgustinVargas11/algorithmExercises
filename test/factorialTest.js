import f from '../factorial/factorial';
import { expect } from 'chai';

describe('Factorial', () => {

    it('should return zero if zero is passed in', () => {
        expect(f(0)).to.equal(0);
    });

    it('should return zero if a negative number is passed in', () => {
        expect(f(-2)).to.equal(0);
    });

    it('should throw an error if string is passed in', () => {
        expect(() => {
            f('sw');
        }).to.throw(TypeError)
    });

    it('should return a 120', () => {
        expect(f(5)).to.equal(120);
    });

    it('should return a 3628800', () => {
        expect(f(10)).to.equal(3628800);
    });

});
