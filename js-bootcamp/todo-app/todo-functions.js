'use strict'

function getSavedData() {
    //localStorage allows us to only store string values. Check for existing saved data
    const todosJson = localStorage.getItem('todos');
    try {
        return todosJson ? JSON.parse(todosJson) : [];
    } catch (e) {// when there is invalid data in localStorage ex: [
        return [];
    }
}

function saveTodos(todosList) {
    localStorage.setItem('todos', JSON.stringify(todosList));
}



















// { // dummy data
//     text: 'Learn JS',
//     completed: false
// }, {
//     text: 'Earn more',
//     completed: false
// }, {
//     text: 'Play',
//     completed: true
// }, {
//     text: 'eat',
//     completed: true
// },{
//     text: 'Sleep',
//     completed: true
// }