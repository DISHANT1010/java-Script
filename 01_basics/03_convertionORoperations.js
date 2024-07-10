let score = "33abc";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0
// null => 0
// undefined => NaN

let isLoggedIn = 1;

let booleanConversion = Boolean(isLoggedIn)

console.log(booleanConversion);

// 1 => true
// 0 => false
// "" => false
// "Subhes" => true

let numberString = 33;

let stringConversion = String(numberString);

console.log(stringConversion);
console.log(typeof stringConversion);

// operations 

console.log(2+2);
console.log(2-2);

let str1 = "Hello "
let str2 = "world"

console.log((str1 + str2));

console.log("1" + 2);
console.log(2 + "1");
console.log(1 + 2 + "2");

console.log(+true);

console.log(+"");