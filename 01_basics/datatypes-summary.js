// primitive basic data types

// 7 types: string, number, boolean, null, undefined, symbol, bigInt

const score = 100
const scorevalue = 100.3

const LoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('321')
const anotherId = Symbol('321')

console.log(id === anotherId)

//const bigNumber = 4564563435464565n

//refrence type (non-primitive)
// arrays,objects,function

const heros = ("shaktiman", "bheem", "doga");

let obj = {
    name: "Amar",
    age: 22,
}

const myfunction = function(){
    console.log("Hello world");
}

console.log(typeof outsideTemp);





//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



//memory type in js

//stack (primitive)we get copy of declared variable, //heap (non-primitive)we get refernce from original value

let myYoutubeName = "amarjeetchoudharydotcom"
let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "amarjeetchoudhary647@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);