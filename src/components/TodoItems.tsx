import React from "react";

interface TodoItemsProps {
  todo: Todo;
  todoToggler: ToggleTodo;
}

export const TodoItems: React.FC<TodoItemsProps> = ({ todo, todoToggler }) => {
    return (
          <li>
            <label
              style={{ textDecoration: todo.done ? "line-through" : "none" }}
            >
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => todoToggler(todo)}
              />
              {todo.text}
            </label>
          </li>
    );
};
