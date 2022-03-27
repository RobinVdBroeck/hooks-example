import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import en from "../translations/en.json";
import nl from "../translations/nl.json";
import LanguageText from "./LanguageText";
import Stats from "./Stats";
import TodoItem from "./TodoItem";
import { LanguageContext, SelectedLanguageContext } from "./contexts";
import LanguageSelector from "./LanguageSelector";

const languages = {
  en,
  nl,
};

const createNewTodo = () => {
  return {
    id: uuid(),
    text: "",
    completed: false,
  };
};

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState(createNewTodo());
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const addTodo = () => {
    if (newTodo.text.trim() === "") {
      return;
    }

    setTodos([...todos, newTodo]);
    setNewTodo(createNewTodo());
  };

  const onNewTodoChange = ($e) => {
    $e.preventDefault();
    const value = $e.target.value;
    setNewTodo({
      ...newTodo,
      text: value,
    });
  };

  const onCompleteChange = (item) => (completed) => {
    const idx = todos.findIndex((todo) => todo.id === item.id);
    if (idx == -1) {
      throw new Error();
    }
    const cloned = [...todos];
    cloned[idx] = { ...todos[idx], completed };
    setTodos(cloned);
  };

  return (
    <>
      <LanguageContext.Provider value={languages}>
        <SelectedLanguageContext.Provider value={selectedLanguage}>
          <h1>
            <LanguageText translationKey="todo-app" />
          </h1>
          <LanguageSelector
            onSelectLanguage={(newVal) => setSelectedLanguage(newVal)}
          />
          <h2>
            <LanguageText translationKey="todo-list" />
          </h2>
          <ul>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                text={todo.text}
                completed={todo.completed}
                onCompleteChange={onCompleteChange(todo)}
              />
            ))}
            {newTodo.text !== "" && (
              <TodoItem
                text={newTodo.text}
                completed={newTodo.completed}
                draft
              />
            )}
          </ul>
          <input
            placeholder="New todo item"
            value={newTodo.text}
            onChange={onNewTodoChange}
          />
          <button type="button" onClick={addTodo}>
            <LanguageText translationKey="add" />
          </button>
          <Stats todos={todos} />
        </SelectedLanguageContext.Provider>
      </LanguageContext.Provider>
    </>
  );
};

export default App;
