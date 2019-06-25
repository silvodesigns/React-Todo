import React from 'react';

const TodoForm = props => {

    return(
        <form>
            <input type="text" id="item" onFocus={props.writting}/>
            <img className="add-icon" onClick={props.adding} src="icons/add.svg"/>
         { /*<button onClick={props.erase}>Clear Completed</button>*/}
           
        </form>
    )
}

export default TodoForm;