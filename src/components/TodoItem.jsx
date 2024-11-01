import { Fragment, useState } from "react";

function TodoItemComponent (props){
    const [isDone,setIsDone] = useState(false);

    const handleTaskDone = () => {
        setIsDone(true);
    }
    const handleTaskUnDo = () => {
        setIsDone(false);
    }
    
    return (
        <div className="TodoItem">
            
            { isDone ? (
                <ul>
                    <li onClick={handleTaskUnDo}>
                        <span className="lineThrough">{props.title}</span>
                        <span className="close" onClick={() => props.onDelete(props.index)}>x</span>
                    </li>
                </ul>
            ) :(
                <ul>
                    <li onClick={handleTaskDone}>
                        <span className="noLineThrough">{props.title}</span>
                        <span className="close" onClick={() => props.onDelete(props.index)}>x</span>
                    </li>
                </ul>
            )}
            
            
        </div>
    );
}

export default TodoItemComponent;