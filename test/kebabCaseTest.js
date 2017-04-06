import kc from '../kebabCase/kebabCase';
import { expect } from 'chai';

describe('KebabCase', () => {

    it('should throw an error if a string is not passed in', () => {
        expect(() => {
            kc([])
        }).to.throw(TypeError);
    });

    it('should throw an error if an empty string is passed in', () => {
        expect(() => {
            kc('')
        }).to.throw(Error);
    });

    it('should return a kebab case string when a camel cased string is passed in', () => {
        expect(kc('kebabCase')).to.equal('kebab-case');
    });

    it('should return a kebab case string when a snake cased string is passed in', () => {
        expect(kc('kebab_case')).to.equal('kebab-case');
    });

    it('should return a kebab case string when a snake cased and camel cased mixed string is passed in', () => {
        expect(kc('kebab_caseString')).to.equal('kebab-case-string');
    })



});
