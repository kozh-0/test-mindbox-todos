import { RootState, useAppSelector } from "../Redux/store";

import { Link } from "react-router-dom";
import { useAppDispatch } from "../Redux/store"
import { clearCompleted } from "../Redux/todosSlice";

export default function Status() {

    const activeTodos = useAppSelector((state: RootState) => state.todos.list.filter(el => el.completed !== true).length);
    const status = useAppSelector((state: RootState) => state.todos.status);
    const dispatch = useAppDispatch();
    console.log(status);
    
    return (
        <div className="todos_status">
            {activeTodos ? <span>{activeTodos} items left</span> : null}
            <div className="todos_status_AAC">
                <Link to='/test-mindbox-todos'>All</Link>
                <Link to='/test-mindbox-todos/active'>Active</Link>
                <Link to='/test-mindbox-todos/completed'>Completed</Link>
            </div>
            <button onClick={() => dispatch(clearCompleted())}>Clear completed</button>
        </div>
    );
};