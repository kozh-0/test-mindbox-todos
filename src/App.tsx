import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./Components/Footer";

import Status from "./Components/Status";
import Todos from "./Components/Todos";
import Active from "./pages/Active";
import Completed from "./pages/Completed";
import { RootState, useAppDispatch, useAppSelector } from "./Redux/store";
import { addTodo, hideMessage, setInput } from "./Redux/todosSlice";


export default function App() {

	const dispatch = useAppDispatch();
	const input = useAppSelector((state: RootState) => state.todos.input);
	const msg = useAppSelector((state: RootState) => state.todos.isInListStatus);

	useEffect(() => {
		msg && setTimeout(() => {
			dispatch(hideMessage());
		}, 3000);
	}, [msg, dispatch]);


	return (
		<main className="main">
			<div className="container">
				<h2>todos</h2>

				<div className="todos">
					<div className="todos_input">
						<input
							autoFocus
							type="text"
							placeholder="What needs to be done?"
							maxLength={100}
							value={input}
							onChange={(e) => dispatch(setInput(e.target.value))}
							onKeyDown={(e) => { if (e.key === "Enter") dispatch(addTodo(input)) }}
						/>
						<button className="todos_input_send btn" onClick={() => dispatch(addTodo(input))}>Add</button>
					</div>
					<Routes>
						<Route path='/test-mindbox-todos' element={<Todos />} />
						<Route path='/test-mindbox-todos/active' element={<Active />} />
						<Route path='/test-mindbox-todos/completed' element={<Completed />} />
					</Routes>

					<Status />
				</div>
				<div className="bottom"></div>
				<div className="bottom"></div>
			</div>
			{msg && <div
				className="message"
				onClick={() => dispatch(dispatch(hideMessage()))}
			>You already have <br /> this todo</div>}
			<Footer />
		</main>
	);
};

