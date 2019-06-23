import React from 'react';


const Todo = props =>{

  return(
    <div>
        <p onClick={props.completed}>{props.task.task}</p>
    </div>
  );
};

export default Todo;
  