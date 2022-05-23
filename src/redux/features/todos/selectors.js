export const selectFilter = (filter) => (state) => {
  switch (filter) {
    case "ALL":
      return state.todos;
    case "COMPLETED":
      return state.todos.filter((todo) => todo.completed);
    case "NOT-COMPLETED":
      return state.todos.filter((todo) => !todo.completed);
    default:
      throw new Error("invalid filter");
  }
};
