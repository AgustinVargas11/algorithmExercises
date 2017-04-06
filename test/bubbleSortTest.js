import BS from '../bubbleSort/bubbleSort';
import { expect } from 'chai';
import '../helpers/arrayFill/arrayFill';

const data = [];

before(() => {
  data.arrayFill(100, true);
  console.log(data);
  
});


describe('Bubble sort', () => {

  it('should return an empty array', () => {
    expect(BS([])).to.be.empty;
  });

  it('should return a sorted array', () => {
    let newData = data.sort((a, b) => a - b);
    expect(BS(data)).to.eql(newData);
  });

});
