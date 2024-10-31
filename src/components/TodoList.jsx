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
        // console.log(tasks);
    }
    
    const handleTaskDelete = (index) =>{
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
        console.log(tasks);
    }

        
    return (
        <Fragment>
            <h1>Todo List</h1>
            <input type="text" placeholder="Title" value={title} onChange={handleTitleValue}/>
            <button className="addTask" onClick={handleTaskCreate}>Add</button>
            <ul>
                {tasks.map((title,index)=>{
                    return <TodoItemComponent key={index} title={title} onDelete={handleTaskDelete}/>;
                })}
            </ul>
        </Fragment>
    );
}

export default TodoListComponent;