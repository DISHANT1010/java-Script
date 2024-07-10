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