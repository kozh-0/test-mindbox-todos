
export default function Status() {
    return (
        <div className="todos_status">
            <span>2 items left</span>
            <div className="todos_status_AAC">
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
            <button>Clear completed</button>

        </div>
    )
}