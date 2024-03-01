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