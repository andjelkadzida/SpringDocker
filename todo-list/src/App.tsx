import React, { useState } from "react";
import { ToDoForm } from "./ToDoForm";
import { ToDoList } from "./ToDoList";

const initialToDos: Array<Todo> = [
  { text: "Clone repository", complete: true },
  { text: "Install new OS on private laptop", complete: false },
];

const App: React.FC = () => {
  const [todos, setToDos] = useState(initialToDos);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setToDos(newTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== "" &&
      setToDos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <React.Fragment>
      <ToDoList todos={todos} toggleTodo={toggleTodo} />
      <ToDoForm addTodo={addTodo} />
    </React.Fragment>
  );
};

export default App;
