import { RootState, useAppDispatch, useAppSelector } from "../Redux/store"
import { deleteTodo, toggleTodoStatus } from "../Redux/todosSlice";

export default function Todos() {
    const todos = useAppSelector((state: RootState) => state.todos.list);
    const dispatch = useAppDispatch();

    return (
        <div className="todos_list">
            {todos.length ? todos.map(el => (
                <div key={el.title} className="todos_list_item">
                    <label
                        tabIndex={0}
                        onKeyDown={(e) => { if (e.key === 'Enter') dispatch(toggleTodoStatus(el.title)) }}
                        aria-label='toggle todo status'
                    >
                        <input
                            type="checkbox"
                            onChange={() => dispatch(toggleTodoStatus(el.title))}
                            checked={el.completed}
                            className={el.completed ? '' : 'round'}
                        />
                        <span style={el.completed ? { color: '#9e9e9e', textDecoration: "line-through" } : {}}>{el.title}</span>
                    </label>
                    <button onClick={() => dispatch(deleteTodo(el.title))}>&#10008;</button>
                </div>
            )) : <h5>Add your first todo</h5>}
        </div>
    );
};
