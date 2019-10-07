import React from 'react';


const Todo = props =>{

  return(
    <div class="task">
        <p onClick={props.completed}>{props.task.task}</p>
    </div>
  );
};

export default Todo;
  