import React from "react";
import { ToDoListItem } from "./ToDoListItem";

interface ToDoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
}

export const ToDoList: React.FC<ToDoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <ToDoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
        );
      })}
    </ul>
  );
};
