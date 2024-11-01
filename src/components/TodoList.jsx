import { Fragment, useState } from "react";
import TodoItemComponent from "./TodoItem";


function TodoListComponent(){
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");

    const handleTitleValue = (e) =>{
        setTitle(e.target.value);
    }

    const handleTaskCreate = () =>{
        setTasks([...tasks,title]);
        setTitle("");
    }

    const handleDelTask = (index) =>{
        const newTasks = [...tasks];
        setTasks(newTasks.filter((_, i) => i !== index));
    }

        
    return (
        <Fragment>
            <h1>Todo List</h1>
            <input type="text" placeholder="Title" value={title} onChange={handleTitleValue}/>
            <button className="addTask" onClick={handleTaskCreate}>Add</button>
            <ul>
                {tasks.map((title,index)=>{
                    return <TodoItemComponent key={index} index={index} title={title} onDelete={handleDelTask} />;
                })}
            </ul>
        </Fragment>
    );
}

export default TodoListComponent;