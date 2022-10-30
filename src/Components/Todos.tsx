import { RootState, useAppDispatch, useAppSelector } from "../Redux/store"
import { toggleTodoStatus } from "../Redux/todosSlice";

export default function Todos() {
    const todos = useAppSelector((state: RootState) => state.todos.list);
    const dispatch = useAppDispatch();

    return (
        <div className="todos_list">
            {todos.map(el => (
                <div key={el.title} className="todos_list_item">
                    <label>
                        <input type="checkbox" onChange={() => dispatch(toggleTodoStatus(el.title))}/>
                        <span>{el.title}</span>
                    </label>
                </div>
            ))}

        </div>
    )
}
