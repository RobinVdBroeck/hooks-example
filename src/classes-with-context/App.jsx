import React from "react";
import { v4 as uuid } from "uuid";
import en from "../translations/en.json";
import nl from "../translations/nl.json";
import LanguageText from "./LanguageText";
import Stats from "./Stats";
import TodoItem from "./TodoItem";
import { LanguageContext, SelectedLanguageContext } from "./contexts";
import LanguageSelector from "./LanguageSelector";

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
        <LanguageContext.Provider value={App.languages}>
          <SelectedLanguageContext.Provider value={this.state.selectedLanguage}>
            <h1>
              <LanguageText translationKey="todo-app" />
            </h1>
            <LanguageSelector
              onSelectLanguage={(newVal) => this.setLanguage(newVal)}
            />
            <h2>
              <LanguageText translationKey="todo-list" />
            </h2>
            <ul>
              {this.state.todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  text={todo.text}
                  completed={todo.completed}
                  onCompleteChange={this.onCompleteChange(todo)}
                />
              ))}
              {this.state.newTodo.text !== "" && (
                <TodoItem text={this.state.newTodo.text} draft />
              )}
            </ul>
            <input
              placeholder="New todo item"
              value={this.state.newTodo.text}
              onChange={this.onChange}
            />
            <button type="button" onClick={this.addTodo}>
              <LanguageText translationKey="add" />
            </button>
            <Stats todos={this.state.todos} />
          </SelectedLanguageContext.Provider>
        </LanguageContext.Provider>
      </>
    );
  }

  setLanguage = (lang) => {
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
