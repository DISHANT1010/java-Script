const array = [1,2,3,4,5,6,true,"Dishant"]

const array1 = ["Apple","Banana","Orange"]

const array2 = new Array(1,2,3,4,5)

// console.log(array2[2]);

// Arrays method

// array2.push(6)

// console.log(array2);

// array2.pop();

// console.log(array2);

// array2.unshift(9) // Add the element at the starting of the array

// console.log(array2); 

// array2.shift() // pop the starting element of the array

// console.log(array2);

// console.log(array2.includes(3));

// console.log(array2.indexOf(9));

// slice or splice

console.log("A" ,array2);

const myn1 = array2.slice(1,3);

console.log(myn1);

console.log("B ",array2);


const myn2 = array2.splice(1,3);

console.log("C" , array2);

console.log(myn2);


// ****** NOTE: slice not modify the original array but the splice modify the original array

