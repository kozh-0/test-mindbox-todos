// import { KeyboardEventHandler, useState } from "react";
import { useEffect } from "react";
import Status from "./Components/Status";
import Todos from "./Components/Todos";
import { RootState, useAppDispatch, useAppSelector } from "./Redux/store";
import { addTodo, hideMessage, setInput } from "./Redux/todosSlice";
// import { addTodo } from "./Redux/todosSlice";

export default function App() {

	const dispatch = useAppDispatch();
	const input = useAppSelector((state: RootState) => state.todos.input);
	const msg = useAppSelector((state: RootState) => state.todos.isInListStatus);

	useEffect(() => {
		msg && setTimeout(() => {
			dispatch(hideMessage());
		}, 3000);
	}, [msg, dispatch])


	return (
		<main className="main">
			<div className="container">
				<h2>todos</h2>

				<div className="todos">
					<input
						type="text"
						placeholder="What needs to be done?"
						value={input}
						onChange={(e) => dispatch(setInput(e.target.value))}
						onKeyDown={(e) => { if (e.code === "Enter") dispatch(addTodo(input)) }}
					/>
					<Todos />
					<Status />
				</div>
			</div>
			{msg && <div 
				className="message" 
				onClick={() => dispatch(dispatch(hideMessage()))}
			>You already have <br /> this todo</div>}
			
		</main>
	);
}

