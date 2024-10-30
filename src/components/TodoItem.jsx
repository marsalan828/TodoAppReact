
function TodoItemComponent (props){
    return (
        <div className="TodoItem">
            <h1>{props.name}</h1>
            <input type="text" className="todo-input" placeholder="Add a new task..." />
            <div className="buttons">
                <button className="btn done-btn">Done</button>
                <button className="btn delete-btn">Delete</button>
            </div>
        </div>
    );
}

export default TodoItemComponent;