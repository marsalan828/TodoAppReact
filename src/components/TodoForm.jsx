import React, { useState } from "react";

function TodoFormComponent(){
    const [taskList, setTaskList] = useState([]);

    const handleTaskCreate = () => {

    }

    return (
        <form onSubmit={handleTaskCreate}>
            <input type="text" placeholder="Add a task"/>
            <button type="submit">Add Task</button>
        </form>
    );
    
}