import { Fragment, useState } from "react";
import TodoItemComponent from "./TodoItem";

function TodoListComponent() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");

    const handleTitleValue = (e) => {
        setTitle(e.target.value);
    };

    const handleTaskCreate = () => {
        // Create a task object with title and isDone properties
        if (title.trim() !== "") {
            const newTask = { title: title, isDone: false };
            setTasks([...tasks, newTask]);
            setTitle(""); // Clear the input field
        }
    };

    const handleDelTask = (index) => {
        // Delete the task at the specified index
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const handleIsDone = (index) => {
        // Toggle the isDone state for the specific task
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, isDone: !task.isDone } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <Fragment>
            <h1>Todo List</h1>
            <input type="text" placeholder="Title" value={title} onChange={handleTitleValue} />
            <button className="addTask" onClick={handleTaskCreate}>Add</button>
            <ul>
                {tasks.map((task, index) => (
                    <TodoItemComponent
                        key={index}
                        index={index}
                        title={task.title}
                        isDone={task.isDone}
                        onToggle={() => handleIsDone(index)}
                        onDelete={() => handleDelTask(index)}
                    />
                ))}
            </ul>
        </Fragment>
    );
}

export default TodoListComponent;
