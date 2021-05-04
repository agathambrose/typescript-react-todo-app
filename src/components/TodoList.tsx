import React from "react";
import { TodoItems } from "./TodoItems";

interface TodolistProps {
    todo: Array<Todo>;
    todoToggler: ToggleTodo
}

const TodoList: React.FC<TodolistProps> = ({ todo, todoToggler }) => {
  return (
    <ul style={{ listStyle: "none" }}>
      {todo.map(todo => {
        return <TodoItems key={todo.text} todo={todo} todoToggler={todoToggler} />;
      })}
    </ul>
  );
};

export default TodoList;
