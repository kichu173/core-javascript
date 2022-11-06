// objects are used to group the related piece of information of model(user/book/person) and store together.
// challenge

let myPerson = {
    name : 'Andrew',
    age: 27,
    location : 'Philadelphia'
}

console.log(`${myPerson.name} is ${myPerson.age} and lives in ${myPerson.location}.`);

myPerson.age = myPerson.age + 1;

console.log(`${myPerson.name} is ${myPerson.age} and lives in ${myPerson.location}.`);