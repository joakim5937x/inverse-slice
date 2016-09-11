'use strict'

/* Add functions as builtin methods */
Array.prototype.iSlice = iSliceBuiltin;
String.prototype.iSlice = iSliceBuiltin;
Array.prototype.iSplice = iSpliceBuiltin;

/* Add the function as a builtin array function */
function iSliceBuiltin(start, end) {
	return iSlice(this, start, end)
}

/* Add the function as a builtin array function */
function iSpliceBuiltin(start, end) {
	return iSplice(this, start, end);
}

/* 
   Inverse slice - for arrays and strings.
   Will return a new array/string with the elements between start and end cut out
   this will act like a inverse slice.
   [1,2,3].iSlice(0,1) -> [2,3] original array will NOT be modified
*/
function iSlice(arr, start, end) {
	return iSliceSpliceHelper((s, e) => arr.slice(s, e), arr, start, end);
}


/* 
   Inverse splice - for arrays and strings.
   Will return a new array/string with the elements 
   [1,2,3].iSplice(0,1) -> [2,3] original array will contain the rest [1]
*/
function iSplice(arr, start, end) {
	return iSliceSpliceHelper((s, e) => arr.splice(s, e), arr, start, end);
}

/*
  This function help simplify the code, 
  It handles both the splice and slice operation depending on the content of func
*/
function iSliceSpliceHelper(func, arr, start, end) {
	let beginning = func(0, start);
	let ending = func(end, arr.length);
	let newArr = beginning.concat(ending);
	return newArr;
}

/* 
   These functions can also be used as regular from the require 
*/
module.exports = {
	iSlice,
	iSplice
}
