import Status from "./Components/Status";
import Todos from "./Components/Todos";
import { useAppDispatch } from "./Redux/store";
import { setInput } from "./Redux/todosSlice";

export default function App() {

  const dispatch = useAppDispatch();

  return (
    <main className="main">
      <div className="container">
        <h2>todos</h2>

        <div className="todos">
          <input
            type="text"
            placeholder="What needs to be done?"
            onChange={(e) => dispatch(setInput(e.target.value))}
          />

          <Todos />

          <Status />
        </div>
      </div>
    </main>
  );
}

