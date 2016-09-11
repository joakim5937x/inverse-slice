'use strict';

const chai = require('chai');
const inverseSlice = require('../index.js');

chai.should();

describe('Test inverse slice (iSlice)', () => {
	let arr1 = [1,2,3,4,5,6,7];
	let arr2 = arr1.slice(); // Create a (deep)copy of arr1
	let arr3 = [2,3,4,5,6,7];
	it('should slice inverted', () => {
		let iSlice = arr1.iSlice(0,1);
		iSlice.should.deep.equal(arr3); // Should have inversed sliced
		arr1.should.deep.equal(arr2); // Should not have changed original array
	});
});

describe('Test inverse splice (iSplice)', () => {
	let arr1 = [1,2,3,4,5,6,7];
	let arr2 = arr1.slice(); // Create a (deep)copy of arr1
	let arr3 = arr2.splice(0,1);
	it('should splice inverted', () => {
		let iSplice = arr1.iSplice(0,1);
		iSplice.should.deep.equal(arr2);  
		arr1.should.deep.equal(arr3);  

	});
});
