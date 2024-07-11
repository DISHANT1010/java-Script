let myDate = new Date();

console.log(myDate); 

console.log(myDate.toString());

console.log(myDate.toDateString());

console.log((myDate.toJSON()));

console.log(myDate.toISOString());

console.log((myDate.toLocaleDateString()));

console.log((myDate.toLocaleString()));

console.log(myDate.toLocaleTimeString());

console.log(myDate.toTimeString());

let createdDate = new Date(2024,0,1) 
// Months in js is starting from 0 in array formate in DD-MM-YY formate the months starting from 1

console.log(createdDate.toLocaleString());

let newCreatedDate = new Date("01-02,2024")

console.log(newCreatedDate);


let myTimeStamp = Date.now();

console.log(myTimeStamp);

console.log(createdDate.getTime());

console.log(Math.floor(Date.now()/1000));

const newDate = new Date();

console.log(newDate.getDate());

console.log(newDate.getDay());

console.log(newDate.getMonth()+1); // Month starting from 0

newDate.toLocaleString('default',{
    weekday : "long",
})