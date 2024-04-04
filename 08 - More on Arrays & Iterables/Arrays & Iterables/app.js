// Creating Arrays
//_________________________________________________________
// const array1 =[1,2,3];
// console.log(array1);
// Normal array [1, 2, 3]
// const array2 = Array(5);
// console.log(array2);
// normal array with 5 length [empty × 5]
// const array3 = Array(1,3,4);
// console.log(array3);
// normal array too [1, 3, 4]
// const realArray =Array.from('welcome');
// console.log(realArray);
// convert iterables and array like object to a REAL Array.
// ['w', 'e', 'l', 'c', 'o', 'm',  'e']
//_________________________________________________________

// //Can store anything in array.
//_________________________________________________________

// const hobbies = ['sports','reading','coding'];
// hobbies.push('coding'); //push to last one return the new length
//  hobbies.pop(); //removes the last element and return it
//
// //hobbies.shift(); // removes the first element and return it
//  hobbies.unshift('coding'); //push to first one return the new length;
//_________________________________________________________

// splice();
// const splicedArray =hobbies.splice(0,3,'food'); // return the deleted elements
// like an array with the item given [food]
// console.log(hobbies);
// console.log(splicedArray);
//_________________________________________________________

//slice();
// const numbers1 =[1,3,4,5,3];
// const storedNumbers1 =numbers;
//
// numbers1.push(8);
// console.log(storedNumbers1); //[1,3,4,5,3,8]
// // i don't want it to behave like that I want to store a copy of numbers in storedNumber
// // they have the same address because arrays are reference data type
// //How?
// with the slice();
//const numbers =[1,3,4,5,3];
// const storedNumbers =numbers.slice(); // now this it a new copy of numbers with a new address
//
// numbers.push(8);//[1,3,4,5,3,8]
// console.log(storedNumbers); //[1,3,4,5,3]
// const sliced = numbers.slice(1,3);// slice the array form index 1 to 3(don't take 3)
// console.log(sliced) [3,4]
//_________________________________________________________

//concat();
// const number =[1,2,3,4,5,6];
// const otherNumbers = [7,8,9,10,11,12];
// const combineWithPush = number.push(7,8,9,10,11,12); //[1,2,3,4,5,6,[7,8,9,10,11,12]] not what I want
// const combineWithConcat = number.concat(otherNumbers); //[1,2,3,4,5,6,7,8,9,10,11,12]//what I want to do
//_________________________________________________________

// indexof(); lastindexof();
// const number =[7,3,5,1,6,1];
// number.indexOf(1); //return 3 the first index where it found 1 (form the left)
// number.lastIndexOf(1); //return 0 the first index where it found 1 (form the right)
// //BUT
// const personData =[{name:'max'},{name:'amr'}];
// console.log(personData.indexOf({name:'amr'})); // will not work because of the object reference
// not finding anything returns -1 (remember that)
//_________________________________________________________

// find(); findIndex();
const personData =[{name:'max'},{name:'amr'},{name:'max'}];
const aa =personData.find((person)=>{
    return person.name === 'max';
});
console.log(aa) //{name:'max'}
const aaIndex =personData.findIndex((person)=>{
    return person.name === 'max';
});
console.log(aaIndex) //0






