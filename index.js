'use strict'

/* Add functions as builtin methods */
Array.prototype.iSlice = iSliceBuiltin;
String.prototype.iSlice = iSliceBuiltin;

/* Add the function as a builtin array function */
function iSliceBuiltin(start, end) {
	return iSlice(this, start, end)
}


/* 
   Inverse slice - for arrays and strings.
   Will return a new array/string with the elements between start and end cut out
   this will act like a inverse slice.
   [1,2,3].iSlice(0,1) -> [2,3] original array will NOT be modified
*/
function iSlice(arr, start, end) {
	let beginning = arr.slice(0, start);
	let ending = arr.slice(end, arr.length);
	let newArr = beginning.concat(ending);
	return newArr;
}


/* 
   This functions can also be used as regular from the require 
*/
module.exports = {
	iSlice,
}
