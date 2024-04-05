const userInput ='last name'
const person = {
    'first name': 'amr',
    // userInput : 'khaled', // wrong that will make the key called userInput
    //I want it to be the last name as user entered
    [userInput]:'khaled', // as is it looks the thing inside userInputs
    age: 10,
    hobbies: ['sports,coding'],
    greet: function (){alert('hi')},
    1.3 :'hello'
};
console.log(person);
person.greet();
person.isAdmin =true; // adds more to the object!
// how to access the value with the key? with square bracket
console.log(person['first name']);// should be string NOTE!
console.log(person['1.3']);
//can't do (person.first name) wrong