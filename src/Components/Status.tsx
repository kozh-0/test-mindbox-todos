import { RootState, useAppSelector } from "../Redux/store";

import { Link, useLocation } from "react-router-dom";
import { useAppDispatch } from "../Redux/store"
import { clearCompleted } from "../Redux/todosSlice";

export default function Status() {

    const activeTodos = useAppSelector((state: RootState) => state.todos.list.filter(el => el.completed !== true).length);
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const id = pathname.split('/')[2];
    const style = { border: '1px solid rgba(212, 53, 47, 0.4)' };

    return (
        <div className="todos_status">
            {activeTodos ? <span>{activeTodos} items left</span> : null}
            <div className="todos_status_AAC">
                <Link
                    style={!id ? style : {}}
                    to='/test-mindbox-todos'
                >All</Link>
                <Link
                    style={id === 'active' ? style : {}}
                    to='/test-mindbox-todos/active'
                >Active</Link>
                <Link
                    style={id === 'completed' ? style : {}}
                    to='/test-mindbox-todos/completed'
                >Completed</Link>
            </div>
            <button onClick={() => dispatch(clearCompleted())}>Clear completed</button>
        </div>
    );
};