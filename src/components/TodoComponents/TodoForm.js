import React from 'react';

const TodoForm = props => {

    return(
        <form>
            <input type="text" id="item"/>
            <button onClick={props.adding}>Add to List</button>
           
        </form>
    )
}

export default TodoForm;