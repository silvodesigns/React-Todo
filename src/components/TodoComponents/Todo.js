import React from 'react';


class Todo extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      done: false
    }
  }

  handleClick = (e) => {
    this.setState({
      done: !this.state.done
    })

  }
  render(){
    return(
      <div class="task">
          <p onClick={this.handleClick} className={this.state.done ? "remove-it" : ""}>{this.props.task.task}</p>
      </div>
    );
  } 

}

export default Todo;
  