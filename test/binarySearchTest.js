import BS from '../binarySearch/binarySearch';
import { expect } from 'chai';

const data = [1, 2, 3, 4, 5, 6];

describe('Binary Search', () => {

    it('should return -1 if array is empty', () => {
        expect(BS([], 1)).to.equal(-1);
    });

    it('should throw an error is dataset is not array or array-like', () => {
        expect(() => {
            expect(BS({}, 1)).to.throw(TypeError);
        })
    });

    it('should throw an error is dataset is not array or array-like', () => {
        expect(() => {
            expect(BS('a', 1)).to.throw(TypeError);
        })
    });

    it('should return -1 if target not a positive number', () => {
        expect(BS(data, -1)).to.equal(-1);
    });

    it('should return -1 if target is not in dataset', () => {
        expect(BS(data, 18)).to.equal(-1);
    });

    it('should return index of target => 4', () => {
        expect(BS(data, 5)).to.equal(4)
    })

});
