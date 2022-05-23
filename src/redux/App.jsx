import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import LanguageText from "./LanguageText";
import Stats from "./Stats";
import TodoItem from "./TodoItem";
import LanguageSelector from "./LanguageSelector";
import TodoList from "./TodoList";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const todos = useSelector((state) => state.todos);
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const addTodo = () => {
    if (newTodo.trim() === "") {
      return;
    }

    dispatch({
      type: "todos/todoAdded",
      payload: {
        id: uuid(),
        text: newTodo,
      },
    });
    setNewTodo("");
  };

  const onNewTodoChange = ($e) => {
    $e.preventDefault();
    const value = $e.target.value;
    setNewTodo(value);
  };

  return (
    <>
      <h1>
        <LanguageText translationKey="todo-app" />
      </h1>
      <LanguageSelector />
      <h2>
        <LanguageText translationKey="todo-list" />
      </h2>
      <ul>
        <TodoList />
        {newTodo.trim() !== "" && (
          <TodoItem text={newTodo} completed={false} draft />
        )}
      </ul>
      <input
        placeholder="New todo item"
        value={newTodo}
        onChange={onNewTodoChange}
      />
      <button type="button" onClick={addTodo}>
        <LanguageText translationKey="add" />
      </button>
      <Stats />
    </>
  );
};

export default App;
