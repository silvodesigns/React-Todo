import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import { random } from 'node-forge';

class App extends React.Component {
// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state


// <App /> will hold all the data needed for this project.
// It will also be the container for your Todo Components.
// All of your application data will be stored here on <App />.
// All of your handler functions should live here on <App />.


  constructor(){
    super();
    this.state ={
     todo: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    };
  };

  //https://medium.com/pro-react/a-brief-talk-about-immutability-and-react-s-helpers-70919ab8ae7c
  //article above is a life saver 

  addTodoItem = (e) => {
    e.preventDefault();
    let itemTask = document.getElementById('item');
    let newEntry = {task:itemTask.value, id: Date.now(), completed:false};
    let updatedList = this.state.todo.concat(newEntry);
    this.setState({todo: updatedList});
    console.log(this.state);
    
  }
  completed = (e) => {
    e.target.style ="text-decoration: line-through";
    e.target.className = "remove-it";
  }

  clearCompleted = (e) => {
    e.preventDefault();
    let toSearch = document.getElementsByClassName("remove-it");
    toSearch.forEach(function(element) {
     element.parentNode.remove();
    });
  
  }

  render() {
    
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todo={this.state.todo} completed={this.completed} erase={this.clearCompleted}/>
        <TodoForm adding={this.addTodoItem}/>
      </div>
    );
  }
}

export default App;
