const { circleArea } = require('./solutions/circleArea');
const { startsWithUpperCase } = require('./solutions/startsWithUpperCase');

// Write a function that determines the area of a circle given the radius.
console.log('-- test circleArea');
console.log(circleArea(2)); // 12.56
console.log(circleArea(32)); // 3216.99
console.log(circleArea(0)); // 0
console.log(circleArea(-10)); // "error: radius is negative"
console.log(circleArea(null)); // "error: radius is empty"
console.log(circleArea(undefined)); // "error: radius is empty"

// 2. Write a function that determines if a string starts with an upper-case letter A-Z and returns true or false.
console.log('\n-- test startsWithUpperCase');
console.log(startsWithUpperCase('Abc')); // true
console.log(startsWithUpperCase('Zav1231')); // true
console.log(startsWithUpperCase('aBc')); // false
console.log(startsWithUpperCase('zBc')); // false
console.log(startsWithUpperCase('1ABc')); // false
console.log(startsWithUpperCase(null)); // false
