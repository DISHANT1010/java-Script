let name = "Dishant"
let repoCount = 10

console.log(`my name is ${name} and my repoCount is ${repoCount}`);

const gamename = new String('ludo')

let anothername = name;
anothername = "Shubhesh"

console.log(name);

console.log(anothername);

const user = {
    Email : "google@.com",
    upi : "yes@ybl"
}

const user2 = user

user2.Email = "microsoft@.com"

console.log(user.Email)
console.log(user2.Email);

// Methods and functions of the string

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename[1]);
console.log(gamename.charAt(2));
console.log(gamename.indexOf('l'));


const newGame = new String("cricket")

const subStr = newGame.substring(0,4);

console.log(subStr);

const anotherNewGame = new String("foot-ball")

const resultNewGame = anotherNewGame.slice(0,7)

console.log(resultNewGame);

const newString1 = new String("   Sharma   ")
console.log(newString1);
console.log(newString1.trim());

const url = 'https://cricket%20.com'
console.log(url.replace('%20','-'));

console.log(url.includes('cricket')); // ask the string is present or note

console.log(url.includes('football'));


console.log(anotherNewGame.split('-'));