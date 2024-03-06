import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false,
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "Build really cool todo app",
      isCompleted: false,
    },
  ]);

  const addTodo = (value) => {
    const newTodos = [...todos, { text: value, isCompleted: false }];
    setTodos(newTodos);
  };

  const removeTodo = (e) => {
    const index = Number(e.target.id);
    let tempTodos = [...todos];
    tempTodos.splice(index, 1);
    setTodos(tempTodos);
  };

  return (
    <div className="App">
      <h1>To-dos</h1>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <div key={index} className="todo">
            {todo.text}
            <div
              id={index}
              role="button"
              className="remove-button"
              onClick={removeTodo}
            >
              X
            </div>
          </div>
        ))}
      </div>

      <Form addTodo={addTodo} />
    </div>
  );
}

export default App;
