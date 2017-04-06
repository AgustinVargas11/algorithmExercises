import P from '../palindrome/isPalindrome';
import { expect } from 'chai';

describe('isPalindrome', () => {

    it('should return true', () => {
        expect(P('mo-m')).to.be.true;
    });

    it('should throw error when anything that is not a string is passed in', () => {
        expect(() => {
            P([]).to.throw(TypeError);
        })
    });

    it('should return true when a single letter is passed in', () => {
        expect(P('a')).to.be.true;
    });

    it('should return true when palindrome mixed with non alphabetic chars is passed in', () => {
        expect(P('taco cat 34290809273097520)(#&(@*#(@#*#)#@*#*@()))')).to.be.true;
    });


    it('should return true when palindrome mixed with non alphabetic chars is passed in', () => {
        expect(P('m-2303984207523---om')).to.be.true;
    });


    it('should return true if palindrome with different cased letters is passed in', () => {
        expect(P('TAcOCat')).to.be.true;
    });

});
