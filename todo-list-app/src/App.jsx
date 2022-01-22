/*
 * @Author: luoxi
 * @LastEditTime: 2022-01-22 23:44:44
 * @LastEditors: your name
 * @Description:
 */
import { useState } from "react";
import ToDoItem from "./components/ToDoItem";

function App() {
  const [todo, setTodos] = useState([]);
  const handleSubmit = (todoItem) => {
    console.log("App", todoItem);
    setTodos({
      ...todo,
      todoItem
    })
  };
  return (
    <div className="todo-app">
      <h2 className="todo-title">代办清单</h2>
      <ToDoItem onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
