import React, { Component } from "react";
import "./App.css";
import Todos from "./Todos";
import AddTodo from './AddTodo'

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "buy some milk" },
      { id: 2, content: "play COD Mobile" }
    ]
  };

  deleteTodo = (id) => {
    const newTodos = this.state.todos.filter(todo => {
      return todo.id !== id
    })

    this.setState({
      todos: newTodos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let newtodos = [...this.state.todos,todo];

    this.setState({
      todos:newtodos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
