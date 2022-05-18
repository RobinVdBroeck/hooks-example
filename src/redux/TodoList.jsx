import { useDispatch, useSelector } from "react-redux"
import TodoItem from "./TodoItem";

export default () => {
	const todos = useSelector(state => state.todos);
	const dispatch = useDispatch();
	const onCompleteToggle = (id) => () => {
		dispatch({
			type: "todos/todoToggled",
			payload: {
				id: id
			}
		 });	
	};

	return todos.map((todo) => {
		return <TodoItem 
			key={todo.id} 
			text={todo.text} 
			completed={todo.completed}
			onCompleteToggle={onCompleteToggle(todo.id)} 
			draft={false}
		/>
	});	
}