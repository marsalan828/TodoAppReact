import { Fragment } from "react";
import TodoItemComponent from "./TodoItem";


function TodoListComponent(){
    return (
        <Fragment>
            <h1>Todo List</h1>
            <TodoItemComponent name="item1" />
            <TodoItemComponent name="item2" />
            <TodoItemComponent name="item3" />
        </Fragment>
    );
}

export default TodoListComponent;