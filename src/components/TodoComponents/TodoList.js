// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

class TodoList extends React.Component {
    constructor(){
        super();
        this.state=[];
    }

    

    render() {
      return (
        <ul>
            {this.state.map(x => <li>x</li>)}
        </ul>
      );
    }
  }
  
  export default TodoList;
  