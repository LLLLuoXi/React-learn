/*
 * @Author: luoxi
 * @LastEditTime: 2022-01-24 22:12:40
 * @LastEditors: your name
 * @Description:
 */
import { useState } from "react";
import { message } from "antd";
import { STATUS } from "./config/status";
import ToDoItem from "./components/ToDoItem";
import ToDoContainer from "./components/ToDoContainer";
import ToDoFilter from "./components/ToDoFilter";



function App() {
  const [todos, setTodos] = useState([]);
  // 0 1
  const [filterStatus, setFilterStatus] = useState(
    `${STATUS.IS_CREATE},${STATUS.IS_DONE}`
  );

  const handleSubmit = (todoItem) => {
    if (Object.keys(todoItem).length === 0) {
      message.error("请输入代办事项");
      return;
    }
    console.log("App", todoItem);
    setTodos([...todos, todoItem]);
  };
  const handleOperate = (todoItem) => {
    console.log("handleOperate", todoItem);
    //想把在todos 里和操作的todoItem 对应的item项删除掉 ，把修改的记录删除掉了
    const newTodos = todos.filter((todo) => todo.id !== todoItem.id);
    newTodos.push(todoItem);
    setTodos(newTodos);
  };

  const handleStatusChange = (status) => {
    console.log("status:", status);
    setFilterStatus(status);
  };

  return (
    <div className="todo-app">
      <h2 className="todo-title">代办清单</h2>
      <ToDoItem onSubmit={handleSubmit} />
      <ToDoFilter
        filterStatus={filterStatus}
        onFilterStatus={handleStatusChange}
      />
      <ToDoContainer
        filterStatus={filterStatus}
        todos={todos}
        onOperate={handleOperate}
      />
    </div>
  );
}

export default App;
