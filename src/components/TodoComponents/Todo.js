import React from 'react';


const Todo = props =>{

  return(
    <div class="task">
        <div><img className="ribbon-icon" src="icons/ribbon.svg"/></div>
        <div className="task-description"><p onClick={props.completed}>{props.task.task}</p></div>
        <div><img className="edit-icon" src="icons/edit.svg"/></div>
        <div><img className="delete-icon" src="icons/delete.svg"/></div>

       

       

    </div>
  );
};

export default Todo;
  