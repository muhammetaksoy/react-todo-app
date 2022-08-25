import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [todos, setTodos] = useState(["Sunum yap"]);

  const onClickDelete = (index) => {
    const newArray = [...todos];
    newArray.splice(index, 1);
    setTodos(newArray)
  }

  return (
    <>
      <ToastContainer />
      <h1>Todo App</h1>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} onClickDelete={onClickDelete} />
    </>
  );
}

export default App;
