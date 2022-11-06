var name = 'Andrew';
name = 'Ram';
console.log(name);//Ram
var name = 'Mike'; // redeclaration twice with same name of variable is possible

console.log(name);// Mike

if(true) {
    var firstName = 'Jen';// var is not block scoped like let/const.
}

console.log(firstName);// Jen

function check() {
    var secondname = 'Jen';// var is function scoped , let const are block scoped
}

console.log(secondname);// Error : ReferenceError: secondname is not defined

// console.log(age);// Error: ReferenceError: age is not defined
let age;
console.log(age);// undefined

// var age; // Cannot redeclare block-scoped variable 'age'
// console.log(age);// undefined

console.log(expense); // undefined
var expense;
expense = 10;