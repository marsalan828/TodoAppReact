import { Fragment, useState } from "react";

function TodoItemComponent (props){

    const [ipnutValue, setInputValue] = useState('');
    const [isDone, setIsDone] = useState(false);
    const [DisplayText, setDisplayText] = useState('');

    const handleDone = () =>{
        setIsDone(true);
        setDisplayText(ipnutValue);
    }
    const handleTaskDone = () =>{
        const task = document.getElementById('displayText');
        task.style.textDecoration = 'line-through';
    }
    
    const handleUndo = () =>{
        const task = document.getElementById('displayText');
        task.style.textDecoration = 'none';
    }
    const handleDelete = () =>{
        setIsDone(false);
        setInputValue('');
        setDisplayText(ipnutValue);
    }
    
    return (
        <div className="TodoItem">
            {isDone ? (
                <Fragment>
                    <h2>{props.name}</h2>
                    <p id="displayText">{DisplayText}</p>
                    <div className="buttons">
                        <button className="btn done-btn" onClick={handleTaskDone}>Done</button>
                        <button className="btn delete-btn" onClick={handleDelete}>Delete</button>
                        <button className="btn undo-btn" onClick={handleUndo}>Undo</button>
                    </div>
                </Fragment>
            ): (
                <Fragment>
                    <h2>{props.name}</h2>
                    <input type="text" className="todo-input" value={ipnutValue} onChange={(e)=>setInputValue(e.target.value)} placeholder="Add a new task..." />
                    <div className="buttons">
                        <button className="btn done-btn" onClick={handleDone}>Done</button>
                        <button className="btn delete-btn">Delete</button>
                    </div>
                </Fragment>
            )}
        </div>
    );
}

export default TodoItemComponent;