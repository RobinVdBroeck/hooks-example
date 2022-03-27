import React from "react";
import { v4 as uuid } from "uuid";
import en from "../translations/en.json";
import nl from "../translations/nl.json";
import LanguageText from "./LanguageText";
import Stats from "./Stats";
import TodoItem from "./TodoItem";

class App extends React.Component {
  static languages = {
    en,
    nl,
  };

  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      newTodo: {
        id: uuid(),
        text: "",
        completed: false,
      },
      selectedLanguage: "en",
    };
  }

  render() {
    return (
      <>
        <h1>
          <LanguageText
            languages={App.languages}
            selectedLanguage={this.state.selectedLanguage}
            translationKey="todo-app"
          />
        </h1>
        <h2>
          <LanguageText
            languages={App.languages}
            selectedLanguage={this.state.selectedLanguage}
            translationKey="language-selection"
          />
        </h2>
        <div>
          <button onClick={this.setLanguage("en")}>
            <LanguageText
              languages={App.languages}
              selectedLanguage={this.state.selectedLanguage}
              translationKey="english"
            />
          </button>
          <button onClick={this.setLanguage("nl")}>
            <LanguageText
              languages={App.languages}
              selectedLanguage={this.state.selectedLanguage}
              translationKey="dutch"
            />
          </button>
        </div>
        <h2>
          <LanguageText
            languages={App.languages}
            selectedLanguage={this.state.selectedLanguage}
            translationKey="todo-list"
          />
        </h2>
        <ul>
          {this.state.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              text={todo.text}
              selectedLanguage={this.state.selectedLanguage}
              languages={App.languages}
              completed={todo.completed}
              onCompleteChange={this.onCompleteChange(todo)}
            />
          ))}
          {this.state.newTodo.text !== "" && (
            <TodoItem
              text={this.state.newTodo.text}
              selectedLanguage={this.state.selectedLanguage}
              languages={App.languages}
              draft
            />
          )}
        </ul>
        <input
          placeholder="New todo item"
          value={this.state.newTodo.text}
          onChange={this.onChange}
        />
        <button type="button" onClick={this.addTodo}>
          <LanguageText
            languages={App.languages}
            selectedLanguage="en"
            translationKey="add"
          />
        </button>
        <Stats
          todos={this.state.todos}
          languages={App.languages}
          selectedLanguage={this.state.selectedLanguage}
        />
      </>
    );
  }

  setLanguage = (lang) => () => {
    this.setState((state) => ({
      ...state,
      selectedLanguage: lang,
    }));
  };

  onChange = ($e) => {
    this.setState((state) => ({
      ...state,
      newTodo: {
        ...state.newTodo,
        text: $e.target.value,
      },
    }));
  };

  addTodo = () => {
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
  };

  onCompleteChange = (item) => {
    return (completed) => {
      this.setState((state) => {
        let todos = [...state.todos];
        const idx = todos.findIndex((todo) => todo === item);
        if (idx == -1) {
          throw new Error();
        }
        todos[idx] = { ...todos[idx], completed };
        return {
          ...state,
          todos,
        };
      });
    };
  };
}

export default App;
