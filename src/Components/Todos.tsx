import { RootState, useAppSelector } from "../Redux/store"

export default function Todos() {
    const todos = useAppSelector((state: RootState) => state.todos.list);

    return (
        <div className="todos_list">
            {todos.map(el => (
                <div key={el.id} className="todos_list_item">
                    <label>
                        <input type="checkbox" />
                        <span>{el.title}</span>
                    </label>
                </div>
            ))}

        </div>
    )
}
