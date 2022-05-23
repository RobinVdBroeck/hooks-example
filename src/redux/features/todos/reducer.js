export const initialState = [
  { id: 0, text: "Learn React", completed: true },
  { id: 1, text: "Learn Redux", completed: false },
  { id: 2, text: "Build something fun!", completed: false },
];

// This must be a pure funtion: no side effects: i.e. generating a id, doing a request
// It should also not mutate the params (state, action), instad, it should return a new
// state object
export default function todosReducer(state = initialState, action) {
  const payload = action.payload;
  switch (action.type) {
    case "todos/todoAdded": {
      return [
        ...state,
        {
          id: payload.id,
          text: payload.text,
          completed: false,
        },
      ];
    }
    case "todos/todoToggled": {
      return state.map((todo) => {
        if (todo.id != action.payload.id) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    }
    default:
      return state;
  }
}
