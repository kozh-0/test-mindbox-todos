import { RootState, useAppDispatch, useAppSelector } from "../Redux/store"
import { toggleTodoStatus } from "../Redux/todosSlice";

export default function Active() {
    const todos = useAppSelector((state: RootState) => state.todos.list.filter(el => el.completed !== true));
    const dispatch = useAppDispatch();

    return (
        <div className="todos_list">
            {todos.map(el => (
                <div key={el.title} className="todos_list_item">
                    <label>
                        <input
                            type="checkbox"
                            onChange={() => dispatch(toggleTodoStatus(el.title))}
                            checked={el.completed}
                        />
                        <span style={el.completed ? { color: '#9e9e9e', textDecoration: "line-through" } : {}}>{el.title}</span>
                    </label>
                </div>
            ))}

        </div>
    )
}