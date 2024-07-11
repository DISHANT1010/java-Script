// Premitive data Type => 7

// string , number, boolean, null, undefined , Symbol, BigInt

const score = 100
const score_Value = 100.3

const isLoggedIn = false
const outsideTemp = null

let user_Email = undefined;

const id = Symbol('123')
const another_Id = Symbol('123')

// if we assign same value to diffrent symbol variable so both output is diffrent

console.log(id === another_Id);

const big_Number = 1234567982379824212131n 
// to declare the bigInt we only do is after the number we add only n is convert in to the bigInt




// Refrence type => non premetive 

// Array, Objects, Functions 

// Function typeof => object function

// all the Refrence type dataType is typeof function

const fruits = ["Apple","Banana","Orange"];

let myObj =  {

    name:"Dishant",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World!");
}


