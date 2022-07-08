//String Data type 
let firstname="John";
let lastname='Doe';

//concat
let fullname=firstname+" "+lastname;
console.log(fullname);
//To check the type of data
// typeof 
console.log(typeof fullname);



//Number Data type
let value=10;
console.log(value);
console.log(typeof value);//number

//Decimal Data type
let value1=10.5747446464;
console.log(value1);
console.log(typeof value1);//number
console.log(value1.toFixed(1));//toFixed(2) to display 2 decimal places


//Boolean Data type->condition testing
// Boolean data type can hold 2 values=true or false
// true->1/correct/yes/on
// false->0/incorrect/no/off

let isWorkDone=true;
console.log(isWorkDone);//true
console.log(typeof isWorkDone);//boolean

let isEligible_for_Vote=false;
console.log(isEligible_for_Vote);//false
console.log(typeof isEligible_for_Vote);//boolean



//Undefined Data type->variable is created,value is not assigned
let age;
console.log(age);//undefined
console.log(typeof age);//undefined


//Null Data type->null keyword is used to assign value to variable
// nothing,values as unknown
let age1=null;//unknown
age1=12;
console.log(age1);//12



let string1=null;
let string2=" ";

console.log(string1==string2);//false



//Array Data type->collection of values
let array1=[10,"Lavish",30,40,50];
console.log(array1);//[10,20,30,40,50]

//Accessing array elements->indexing approach
// in array-index starts from 0
console.log(array1[100]);//Lavish


array1[10]=100;
console.log(array1);//11



/*
John Doe
script.js:10 string
script.js:16 10
script.js:17 number
script.js:21 10.5747446464
script.js:22 number
script.js:23 10.6
script.js:32 true
script.js:33 boolean
script.js:36 false
script.js:37 boolean
script.js:43 undefined
script.js:44 undefined
script.js:51 12
script.js:58 false
script.js:64 (5) [10, 'Lavish', 30, 40, 50]
script.js:68 undefined
script.js:72 (11) [10, 'Lavish', 30, 40, 50, empty × 5, 100]
*/