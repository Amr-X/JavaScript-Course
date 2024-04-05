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
// number.lastIndexOf(1); //return 5 the first index where it found 1 (form the right)
// //BUT
// const personData =[{name:'max'},{name:'amr'}];
// console.log(personData.indexOf({name:'amr'})); // will not work because of the object reference
// not finding anything returns -1 (remember that)
//_________________________________________________________

// find(); findIndex(); (keep in mind)
// const personData =[{name:'max'},{name:'amr'},{name:'max'}];
// const elementSearched =personData.find((person,indx,persons)=>{
//     return person.name === 'max';});
// //This one takes every element that is person for every persons.
// //Checks for name, is it max?
// //True -> stores that element to
// //False -> return undefined
// console.log(elementSearched) //{name:'max'}
// const elementSearchedIndex =personData.findIndex((person,indx,persons)=>{
//     return person.name === 'max'; // just returns the index
// });
// console.log(elementSearchedIndex)
//_________________________________________________________

//include
// const numbers =[1,3,4,5,3];
// numbers.includes(5); //true it is there
// numbers.includes(66); // false not there
//numbers.indexOf(5) !==-1 //is 5 exist in the array //true

//foreach();
//works like find but can do stuff for every element in array
// this means it takes argument like find
//(person, indx,persons)=>{stuff here}
// alternative to for of loop, but here you have advantage which
// is your have the index of that element not like the for of loop

//map();
// const prices =[10,20,30,40];
// const tax = 0.2;
//
// const pricesTaxed = prices.map((price,indx,persons)=>{
//     const value =price*(1+tax);
//     return value;
//
// })
// this replaces every element with the returned value;
// console.log(pricesTaxed);

//sorted(); reverse();
// const num =[16,2,1,7];
// console.log(num.sort()); //[1, 16, 2, 7] lexicographic Sorted by ASCII
// console.log(num.sort((a,b)=>{ // a and b is two numbers form the array
//     if (a>b){
//         return 1
//     }else if (a<b){
//         return -1
//     }else{
//         return 0
//     }
// }))
//OR
// console.log(num.sort((a,b)=>{ // a and b is two numbers form the array
//    return  a-b;
// }))
// reverse(); just reverse lol [7,1,2,16]

//filter();
// const numbers =[1,2,3,4,5,6,7,8];
// filter anything greater than 4
// const filteredNumbers=numbers.filter((number,indx,numbers)=>{
//     return number > 4;
// });
// console.log(filteredNumbers) //[5, 6, 7, 8]
//go through every index get its value in number its index
//function says is number greater than 4?
//true-> return true and keep that number to put in a new array
//false -> return false
//for short
//const filteredNumbers=numbers.filter(number=>number > 4);

//reduce();
// const numbers =[1,2,3,4,5];
// numbers.reduce((previousValue, currentValue, currentIndex, numbers)=>{
//     return previousValue+currentValue;
// },0) //0 is the first previousValue then whatever returns become the second previousValue and so on
// output is 15
//here is how (!0+^1)+(!1+^2)+(!3+^3)+(!6+^4)+(!10+^5)
//^ is marked for the elements of the array (currentValue)
//! is marked for the returned value

