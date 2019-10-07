import React from 'react';


const Todo = props =>{

  return(
    <ul class="task">
        <li onClick={props.completed}>{props.task.task}</li>
    </ul>
  );
};

export default Todo;
  