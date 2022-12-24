// Destructuring lets you pull values out of an object or array and store into their own variable.
// Destructuring allows us to unpack values from objects and arrays.

const todo = {
    id: '1',
    text: 'Learn JS',
    completed: false
}

// 1 way of grabbing individual properties from todo object.
// const text = todo.text;
// const completed = todo.completed;

// destructuring makes easier to pull values/properties from todo object.

const {text: otherText, completed, details:otherDetails = 'No details provided', ...others} = todo;

console.log(otherText)// similar to todo.text; in destrucuting you can also name a local vaiable like this const {text: otherText} = todo; 
console.log(completed)
console.log(otherDetails) // provoding a default value else prints undefined.
console.log(others); // we can also use rest opertor to grab other values/ properties from todo object in line 15


// Destructuring arrays (which is not popular or we find useful like object destructuring)

const age = [65, 0, 13, 21];

const[firstAge, secondAge, , lastAge] = age;// doing nothing for the thirdItem in array destrucutre

console.log(firstAge); // 65
console.log(secondAge); // 0
console.log(lastAge); // 21

// with functions
function printTodo({text, completed}) {// destructuring obj in function parameters
    // console.log(`${todo.text}: ${todo.completed}`);// Learn JS: false (this was used when parameters was function printTodo(todo){})
    console.log(`${text}: ${completed}`);// Learn JS: false
}

printTodo(todo);

const complexArrOfObj = [
    {
        name: 'Kiran',
        complexAge: 10
    },
    {
        name: 'Kumar',
        complexAge: 10
    },
    {
        name: 'K',
        complexAge: 10
    }
]

const [,,{complexAge}] = complexArrOfObj;

console.log('age value in 3rd object of arr ', complexAge);
