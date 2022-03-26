import React from "react";
import { v4 as uuid } from "uuid";
import * as PropTypes from "prop-types";
import en from "./translations/en.json";
import nl from "./translations/nl.json";

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

class Stats extends React.Component {
  static propTypes = {
    languages: PropTypes.shape({ en: PropTypes.object, nl: PropTypes.object })
      .isRequired,
    selectedLanguage: PropTypes.string.isRequired,
    todos: PropTypes.array.isRequired,
  };

  render() {
    const { languages, selectedLanguage, todos } = this.props;
    const [completed, notCompleted] = todos.reduce(
      ([completed, notCompleted], todo) => {
        if (todo.completed) {
          return [completed + 1, notCompleted];
        }
        return [completed, notCompleted + 1];
      },
      [0, 0]
    );

    return (
      <div>
        <h3>Stats</h3>
        <p>
          <strong>
            #{" "}
            <LanguageText
              languages={languages}
              selectedLanguage={selectedLanguage}
              translationKey="todos"
            />{" "}
            :
          </strong>
          <span>{todos.length}</span>
        </p>
        <p>
          <strong>
            #{" "}
            <LanguageText
              languages={languages}
              selectedLanguage={selectedLanguage}
              translationKey="completed"
            />
            :{" "}
          </strong>
          <span>{completed}</span>
        </p>
        <p>
          <strong>
            #{" "}
            <LanguageText
              languages={languages}
              selectedLanguage={selectedLanguage}
              translationKey="uncompleted"
            />
            :{" "}
          </strong>
          <span>{notCompleted}</span>
        </p>
      </div>
    );
  }
}

class TodoItem extends React.Component {
  static propTypes = {
    languages: PropTypes.shape({ en: PropTypes.object, nl: PropTypes.object })
      .isRequired,
    selectedLanguage: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    draft: PropTypes.bool,
  };
  static defaultProps = {
    draft: false,
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { text, completed, draft, languages, selectedLanguage } = this.props;
    return (
      <li>
        <span>{text}</span>
        {!draft && (
          <button onClick={this.handleClick}>
            {!draft && (
              <LanguageText
                languages={languages}
                selectedLanguage={selectedLanguage}
                translationKey={completed ? "uncomplete" : "complete"}
              />
            )}
          </button>
        )}
      </li>
    );
  }

  handleClick($e) {
    const { onCompleteChange, completed } = this.props;
    $e.preventDefault();
    onCompleteChange(!completed);
  }
}

class LanguageText extends React.Component {
  static propTypes = {
    languages: PropTypes.shape({ en: PropTypes.object, nl: PropTypes.object })
      .isRequired,
    selectedLanguage: PropTypes.string.isRequired,
    translationKey: PropTypes.string.isRequired,
  };

  render() {
    const { languages, selectedLanguage, translationKey } = this.props;
    return (
      <span>
        {languages?.[selectedLanguage]?.[translationKey] ??
          "not-found:`" + translationKey + "`"}
      </span>
    );
  }
}

export default App;
