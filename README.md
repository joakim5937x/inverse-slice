# inverse-slice
A small library for inverse slice and splice methods/functions for strings and arrays in node.js

## Install

[npm: *inverse-slice*](https://www.npmjs.com/package/inverse-slice)

```
npm install inverse-slice
```

## Example

### Inverse slice (iSlice)

``` js
require('inverse-slice');

let arr1 = [1,2,3,4,5,6,7];

let start = 0;
let end = 1;
let arr2 = arr1.iSlice(start, end); // Inverse slice from start to end, will not modify arr1
console.log(arr2);
// -> [2,3,4,5,6,7]
console.log(arr1)
// -> [1,2,3,4,5,6,7] not modified

```

## Api 

Just use:
``` js
require('inverse-slice');
```

### Slice
Will work with arrays and strings:

``` js
Array.iSlice(start, end);
String.iSlice(start, end);
```
