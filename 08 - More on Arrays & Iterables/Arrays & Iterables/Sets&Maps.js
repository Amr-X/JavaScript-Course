//sets (just array but no duplicates)
//cant use the array method!
// const set2 = new Set([2,4,4,3,5]);
// console.log(set2); // [2,4,3,5]
// console.log(set2.add(7)) //[2,4,3,5,7]
// if(set2.has(2)){ //true it has 2
//     set2.delete(2); //delete 2
// }
// console.log(set2); //[4,3,5,7]
// for (const entry of set2.entries()){ //every entry is now array with 2 same element
//     // [4,4] then [3,3] so on
//     console.log(entry);
//      //[4,4] //[3,3] //[5,5] //[7,7]
// }

//map (think of it like an advanced object) not literally
//can store any datatype in the key:value pairs
// const map =new Map([[{name:'amr'}, {age: 30} ],[{name:'max'}, {age: 4} ]]);
// console.log(map)
//0
// {Object => Object}
// key:{name: 'amr'}
// value:{age: 30}
// 1
// {Object => Object}
// key:{name: 'max'}
// value:{age: 4}
// map.set({name:'noor'}, {age: 6}); and more {Object => Object}
// console.log(map.get({name:'amr'})); // this won't work making a new key with a different address,
// so it will not find any
// make sure to  assign this key {name:'amr'} , so it can have the same value and address
// const person1 ={name:'amr'};
// const person2={name:'noor'};
//
// const personData = new Map();
// personData.set(person1,{sex:'male'});
// personData.set(person2,{sex:'female'});
// personData.get(person1); // getting the value on the person1 key which is {sex:'male'}
// for (const entry of personData.entries()){
//     console.log(entry); //access on every element the whole entry
// }
// for (const key of personData.keys()){
//     console.log(key); //access on every key
// }
// for (const value of personData.values()){
//     console.log(value); //access on every value
// }


