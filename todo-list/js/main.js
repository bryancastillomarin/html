'use strict';

const CLOSE_SYMBOL = '\u2613';
const ENTER_KEY = 'Enter';

window.addEventListener('load', function() {

    const addTodo = document.getElementById('add-todo');
    const newTodo = document.getElementById('new-todo');
    
    addTodo.addEventListener('click', function() {
        addNewTodo(newTodo);
    });
    newTodo.addEventListener('keypress', function(e) {
        console.log(e.key);
        if(e.key === ENTER_KEY) {
            addNewTodo(newTodo);
        }
    });

});

function addNewTodo(newTodo) {
    const value = newTodo.value;

    if (!value) {
        console.log('value is required');
        return; //TODO add alert message
    }
    
    if(isRepeated(value)){
        console.log('value is repeated');
        return; //TODO add alert message
    } 

    createTodo(value);

    newTodo.value = '';
}

function createTodo(value) {
    const input = document.createElement('input');
    input.classList.add('mark-as-done');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', value);
    
    const label = document.createElement('label');
    label.classList.add('todo-text');
    label.setAttribute('for', value);

    const labelText = document.createTextNode(value);
    
    label.appendChild(input);
    label.appendChild(labelText);

    const todoInfo = document.createElement('div');
    todoInfo.classList.add('todo-info');

    todoInfo.appendChild(label);

    const remove = document.createElement('button');
    remove.classList.add('remove');
    addClickEvent(remove);
    //TODO add event click event listener

    const removeText = document.createTextNode(CLOSE_SYMBOL);
    remove.appendChild(removeText);

    const todoActions = document.createElement('div');
    todoActions.classList.add('todo-actions');

    todoActions.appendChild(remove);

    const todo = document.createElement('div');
    todo.classList.add('todo');

    todo.appendChild(todoInfo);
    todo.appendChild(todoActions);

    const todoContainer = document.getElementsByClassName('todos-container')[0];
    todoContainer.appendChild(todo);
}

function addClickEvent(element) {
    element.addEventListener('click', function() {
        const todo = element.closest('.todo');
        todo.remove();
    });
}

const isRepeated = value => document.getElementById(value) !== null;