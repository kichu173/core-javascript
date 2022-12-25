// https://www.youtube.com/watch?v=Qew1GY6sxdY&ab_channel=codeWithSimran

// This refers to the object on which we call our function
// obj1.displayName()

// obj2.displayAge()

function displayAge() {
    console.log(23, this);
}

// window.displayAge();
displayAge();// 23 [object Window]


let obj1 = {
    displayAge: function displayAge() {
        console.log(this);
    }
}

obj1.displayAge();// { displayAge: [Function: displayAge] }

// Note: when it comes to regular functions the value of this keyword is basically what is before the dot.

function displayName() {
    console.log(this.name);
}


let obj2 = {
    name: 'Kichu',
    displayName: displayName
}

let obj3 = {
    name: 'John',
    displayName: displayName
}

obj2.displayName();// Kichu
obj3.displayName();// John

/* Exercise */

var name = 'Lara';
displayName();// Lara
// window.displayName();
// Depends on how we call our function we are able to get access to the object on which we called the function.

// arrow functions
// Note: Inside of arrow functions the value of this depends on where the arrow function is defined and not how we are calling the arrow function.

const obj4 = {// Using regular functions
    name: 'simran',
    sayHello: function() {
        console.log('Hello', this);
        var sayBye = function() {
            console.log('Bye', this);
        }
        sayBye();
    }
}

obj4.sayHello();// Hello obj4 | Bye [object Window]


const obj5 = {
    name: 'simran',
    sayHello: function() {// if you convert sayHello to arrow function, then this will point to global object which is window. 'this' inside arrow function will always points to 'this' of the outer scope(parent function).
        console.log('Hello', this);
        var sayBye = () => {
            console.log('Bye', this);
        }
        sayBye();
    }
}

obj5.sayHello();// Hello { name: 'simran', sayHello: [Function: sayHello] } | Bye { name: 'simran', sayHello: [Function: sayHello] }

var sayBye = () => {
    console.log('Bye', this);
}
sayBye();// window

let user= {
    name: 'Asura',
    age: 24,
    childObj: {
        newName: 'Roadside kiddo',
        getDetails() {// normal function 'this' will point to immediate parent
            console.log(this.newName,'and', this.name);
        }
    }
}

user.childObj.getDetails();// Roadside kiddo and undefined

let user1= {
    name: 'Asura',
    age: 24,
    childObj: {
        newName: 'Roadside kiddo',
        getDetails() {// normal function 'this' will point to immediate parent, where as arrow function 'this' will refer to parent function's 'this' reference.
            console.log(this.newName,'and', this.name);
        }
    }
}

// Inside class, this points to the variable in the constructor.

/* Exercise */ // https://www.youtube.com/watch?v=rv7Q11KWmKU&ab_channel=RoadsideCoder

// create an object calculator
let calculator = {
    read() {
        this.a = +prompt('a = ', 0);
        this.b = +prompt('b = ', 0);
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
}

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
