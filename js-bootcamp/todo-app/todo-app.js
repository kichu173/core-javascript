'use strict'

const todos = getSavedData();

// DOM - Document Obejct Model - we use js object(document.get..) to model the document(html).

const body = document.querySelector('#todo-list');

//To keep track of latest data inputed to store here.
const filterTodo = {
    searchVal: '',
    hideCompleted: false
}

//Used to render todo's in display page
function fiterTodoText(todosList, filterTodo) {
    // 'eat'.includes('') - returns true
    let filteredTodos = todosList.filter(function(todo) {
        return todo.text.toLowerCase().includes(filterTodo.searchVal.toLowerCase());
    })

    // when checkbox is checked display uncomplted one's and if not checked - return true (show all todo)
    filteredTodos = filteredTodos.filter(function(todo) {
        return filterTodo.hideCompleted ? !todo.completed : true;
    })

    document.querySelector('#todo-list').innerHTML = '';//<p>Test</p>

    addTodoText(filteredTodos);
}

fiterTodoText(todos, filterTodo); // calling this method here as initial when page loads to display all available todo text.

function todosLeft(todosList) {
    return todosList.filter(function(todo) {
        return !todo.completed;
    })
}

function addTodoLeftLengthToDiv(todoLeft) {
    const newParagraph = document.createElement('h2');
    newParagraph.textContent = `You have ${todoLeft.length} todo\'s left`;
    //appendChild - adds newly created element value to the end.
    body.appendChild(newParagraph);
}

// Adding todo text as paragraph/span/button/checkbox and wiring it up to a div inside.
function addTodoText(todosList) {
    const todoLeft = todosLeft(todosList);
    addTodoLeftLengthToDiv(todoLeft);
    todosList.forEach(function(todo) {
        const todoEl = document.createElement('div');
        const checkboxEl = document.createElement('input');
        // Setup todo checkbox
        checkboxEl.setAttribute('type', 'checkbox');
        // this property added when we modify localStorage json object value to true, then it should reflect on displayed todos checkbox to ticked on refresh.
        checkboxEl.checked = todo.completed;

        const textEl = document.createElement('span');
        const removeButtonEl = document.createElement('button');
        removeButtonEl.textContent = 'x';
        removeButtonEl.addEventListener('click', function(e) {
            removeTodo(todo.id);
            saveTodos(todos);
            fiterTodoText(todos, filterTodo);
        })

        checkboxEl.addEventListener('change', function(e) {
            // this method modifies the correct obj's completed property - toggleTodo
            toggleTodo(todo.id, e.target.checked);
            //save and render todos on display page.
            saveTodos(todos);
            fiterTodoText(todos, filterTodo);
        })

        textEl.textContent = todo.text;
        todoEl.appendChild(checkboxEl);
        // Setup todo text
        todoEl.appendChild(textEl);
        // Setup todo remove button 'X'
        todoEl.appendChild(removeButtonEl);
        // add above elements to html created div with id="todo-list"
        body.appendChild(todoEl);
    })
}

function removeTodo(id) {
    const todoIndex = todos.findIndex(function(todo) {
        return todo.id === id;
    })
    // condition to check if id is really present in todos array obj, not present then findIndex returns -1
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1);
    }
}

function toggleTodo(id, val) {
    let todoObj = todos.find(function(todo) {
        return todo.id === id;
    })
    if (todoObj) {
        todoObj.completed = val;
    }
}

// Listen for new todo creation button (event.target.textContent) | for dropdown e.target.value <select><option value="a">sort by asc</option></select>

// 'change' event triggers when you enter text and click some where else on screen
// 'input' event to filter todo based on text change for each keystroke (event.target.value - <input> tag, otherwise event.target.textContent)
document.querySelector('#filter-todo').addEventListener('input', function (event) {
    console.log(event.target.value);
    filterTodo.searchVal = event.target.value;
    fiterTodoText(todos, filterTodo);
})

function addNewTodoToList(todo, todosList) {
    // assign a default text value if value is not passed when clicking add todo button
    if (todo === '') {
        todo = 'Unnamed Todo';
    }

    todosList.push({
        id: uuidv4(), // id has a value referred from third party JS library
        text: todo,
        completed: false
    })
    // adding new todo to the localStorage
    saveTodos(todosList);
}

// form action submit
document.querySelector('#add-todo').addEventListener('submit', function(e) {
    //cancel the default action, click on submit event will reload the full page with query params in url
    e.preventDefault();
    let val = e.target.elements.newTodo.value;
    addNewTodoToList(val, todos);
    fiterTodoText(todos, filterTodo);
    e.target.elements.newTodo.value = '';
})

//checkbox - event - e.target.checked (checked - true / not checked - false)
document.querySelector('#todo-checkbox').addEventListener('change', function (e) {
    filterTodo.hideCompleted = e.target.checked;
    fiterTodoText(todos, filterTodo);
    console.log(e.target.checked);
}) 
