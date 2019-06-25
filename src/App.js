import React from 'react';
import './app.css';
import './normalize.css';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import { random } from 'node-forge';
import './components/TodoComponents/Todo.css';

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
     todo: []
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
    itemTask.value = "";

    
  }
  completed = (e) => {
      e.target.src="icons/completed.svg";
      e.target.parentNode.parentNode.style="background-color: blue";
  }

  clearCompleted = (e) => {
    e.preventDefault();
    let toSearch = document.getElementsByClassName("remove-it");
    let converted = Array.from(toSearch);
    converted.forEach(function(element) {
      element.parentNode.remove();
    });
    

  
  }

  writting = (e) => {
    e.preventDefault();
  }

  render() {
    
    return (
      <div>
          <section className="header">
              <h1 className="logo">Todo App</h1>
              <TodoForm adding={this.addTodoItem} erase={this.clearCompleted}/>
          </section>
          <section className="display">
               <TodoList todo={this.state.todo} completed={this.completed} />
          </section>
      </div>
    );
  }
}

export default App;
