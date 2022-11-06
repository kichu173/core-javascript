const todo = ['Learn', 'Earn', 'Play', 'eat', 'sleep'];
// splice(adding/removing/replacing element from middle of list) - 1st arg is index, 2nd arg is how many items to be deleted 1 or 0 (if not deleting),
// 3 rd argument is for adding or replacing with combination of using 2nd argument
todo.splice(2,1); // removing play from the list 'play'
todo.push('Gym time');
// shift - remove first item. 
// unshift - add element to start by provoding value in argument arr.unshift('bla bla');
todo.shift();

console.log(`You have ${todo.length} todo\'s`);
console.log(todo);
todo.forEach(function(item, index) { 
    console.log(`${index + 1}. ${item}`);
});
// traditional for loop / one adv compared is foreach we can use only attached with array. ex: todo.forEach() whereas here todo is an array. if you have an array stick with foreach else you want to print in specific order use traditional for loop.
for(let count = 0; count < todo.length; count++) {
    console.log(`${count+1}. ${todo[count]}`);
}

console.log(`Todo: ${todo[0]}`);
console.log(`Todo: ${todo[todo.length - 2]}`);
console.log(`Todo: ${todo.at(-2)}`);

// challenge area (7. Searching Arrays part II)
const todos = [{
    text: 'Learn JS',
    completed: false
}, {
    text: 'Earn more',
    completed: false
}, {
    text: 'Play',
    completed: true
}, {
    text: 'eat',
    completed: true
},{
    text: 'Sleep',
    completed: true
}]

// filter logic, if result is found it returns the new array as result.
function getThingsTodo(todosList) {
    return todosList.filter(function(todo, index) {
        return !todo.completed;
    })
}

console.log(getThingsTodo(todos));

// search logic and delete if search is found.
function deleteTodo(todosList, textSearch) {
    const index = todosList.findIndex(function (todo) {
        return todo.text.toLowerCase() === textSearch.toLowerCase();
    })
    if (index > -1) {
        todos.splice(index, 1);
    } else {
        console.log('No item match found!');
    }
}

console.log(todos);
deleteTodo(todos, 'sleep');
console.log(todos);

// sort - based on objects completed ones to be at last and not completed ones at the top.
// arr.sort(function(a,b) {}) if 'a' has to be come first/before than 'b' then return -1, else if 'b' has to be come before than 'a' then return 1, else if you feel both are identical then return 0. sorting happens based on the alphabetical order for strings in first letter comparison.
function sortTodos(todosList) {
    todosList.sort(function(a, b) {
        if (a.completed === false && b.completed === true) {// a.completed < b.completed
            return -1;
        } else if (b.completed === false && a.completed ===true) {// b.completed < a.completed
            return 1;
        } else {
            return 0;
        }
    })
}

sortTodos(todos);
console.log(todos);