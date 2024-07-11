const score = 100
console.log(score);

const balance = new Number(400)

console.log(balance);

console.log(balance.toString().length); // convert into the string

console.log(balance.toFixed(2)); // fix the value

const otherValue = 123.987564

console.log(otherValue.toPrecision(3)); // Roundof the Number

const hundred = 1000000
console.log(hundred.toLocaleString('en-IN')); // formate the vlaue accroding to indian number standereds

// ******************************* maths *******************************

console.log(Math);

console.log(Math.abs(-3));

console.log(Math.round(4.6)); // Round of the value

console.log(Math.ceil(4.3)); // Chose the top Value

console.log(Math.floor(4.3)); // take lower value

console.log(Math.min(1, 2, 3, 4, 5, 6)); // return minimum value

console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8)); // return maximum value


console.log((Math.random())); // Genrate a random value between 0-1
console.log((Math.random() * 10) + 1); // Genrate Random value between 1-10
console.log(Math.floor(Math.random() * 10) + 1); // give the lower value


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // generate the random number b/w 10 and 20