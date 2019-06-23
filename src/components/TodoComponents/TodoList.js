// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


// <TodoList /> receives your Todos array and iterates over 
// the list generating a new <Todo /> for each element in the array.


import React from 'react';
import Todo from  './Todo.js';

const TodoList = props =>{
  let items = props.todo;
  return(
    <div id="canvas">{items.map(x => <Todo task={x} key={x.id} completed={props.completed} />)}</div>
  );
};

export default TodoList;
  