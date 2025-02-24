'use strict';

const CLOSE_SYMBOL = '\u2613';
const ENTER_KEY = 'Enter';
const TODO_IS_REQUIRED_ERROR = 'Task is required';
const TODO_IS_REPEATED_ERROR = 'Task is already registered'

let error = null;


window.addEventListener('load', function() {

    const addTodo = document.getElementById('add-todo');
    const newTodo = document.getElementById('new-todo');

    error = document.getElementById('error');
    
    addTodo.addEventListener('click', function() {
        addNewTodo(newTodo);
    });
});

function addNewTodo(newTodo) {
    cleanError();
    const value = newTodo.value;

    if (!value) {
        showError(TODO_IS_REQUIRED_ERROR);
        return;
    }
    
    if(isRepeated(value)){
        showError(TODO_IS_REPEATED_ERROR);
        return;
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

function showError(message) {
    error.innerHTML = message;
    error.classList.remove('hidden');
}

function cleanError() {
    error.classList.add('hidden');
}

const isRepeated = value => document.getElementById(value) !== null;