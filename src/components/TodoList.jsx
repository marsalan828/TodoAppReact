import { Fragment } from "react";
import TodoItemComponent from "./TodoItem";


function TodoListComponent(){
    return (
        <Fragment>
            <h1>Todo List</h1>
            <TodoItemComponent name="item1" />
            <TodoItemComponent name="item2" />
        </Fragment>
    );
}

export default TodoListComponent;