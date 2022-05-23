import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import todosReducer from "./features/todos/reducer";
import languageReducer from "./features/language/reducer";

/**
 * Can also be written as:
 * ```js
 * import {combineReducers} from "redux"
 * const rootReducer = combineReducers({
 *     todos: todosReducer,
 *     ...
 * });
 * ```
 */
function rootReducer(state = {}, action) {
  return {
    todos: todosReducer(state.todos, action),
    language: languageReducer(state.language, action),
  };
}

const store = createStore(rootReducer, composeWithDevTools());

export default store;
