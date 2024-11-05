import { Fragment } from "react";

function TodoItemComponent(props) {
    return (
        <div className="TodoItem">
            <ul>
                <li onClick={props.onToggle}>  {/* Call onToggle when the item is clicked */}
                    <span className={props.isDone ? "lineThrough" : "noLineThrough"}>
                        {props.title}
                    </span>
                    <span className="close" onClick={(e) => {
                        e.stopPropagation(); // Prevent the toggle from firing
                        props.onDelete();
                    }}>x</span>
                </li>
            </ul>
        </div>
    );
}

export default TodoItemComponent;
