import React from "react";
import { v4 as uuid } from "uuid";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      newTodo: {
        id: uuid(),
        text: "",
      },
    };

    this.onChange = this.onChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  render() {
    return (
      <>
        <h2>Todo list:</h2>
        <ul>
          {this.state.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
          {this.state.newTodo.text !== "" && (
            <TodoItem todo={this.state.newTodo} />
          )}
        </ul>
        <input
          placeholder="New todo item"
          value={this.state.newTodo.text}
          onChange={this.onChange}
        />
        <button type="button" onClick={this.addTodo}>
          Add
        </button>
        <div>
          <h3>Stats</h3>
          <p>
            <bold># todos:</bold>
            {this.state.todos.length}
          </p>
        </div>
      </>
    );
  }

  onChange($e) {
    this.setState((state) => ({
      ...state,
      newTodo: {
        ...state.newTodo,
        text: $e.target.value,
      },
    }));
  }

  addTodo() {
    if (this.state.newTodo.text.trim() === "") {
      return;
    }

    this.setState((state) => ({
      ...state,
      todos: [
        ...state.todos,
        {
          ...state.newTodo,
          text: state.newTodo.text.trim(),
        },
      ],
      newTodo: {
        id: uuid(),
        text: "",
      },
    }));
  }
}

class TodoItem extends React.Component {
  render() {
    const { todo } = this.props;
    return <li>{todo.text}</li>;
  }
}

export default App;
