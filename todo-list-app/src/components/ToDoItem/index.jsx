/*
 * @Author: luoxi
 * @LastEditTime: 2022-01-22 23:45:35
 * @LastEditors: your name
 * @Description:
 */
import React, { useState } from "react";
import { Input, Button } from "antd";
import { STATUS } from "../../config/status";
const ToDoItem = (props) => {
  const { onSubmit } = props;
  const [todoItem, setTodoItem] = useState({
    id: Math.random(),
    content: "",
    status: STATUS.IS_CREATE,
  });

  const handleSubmit = () => {
    console.log("handle");
    onSubmit && onSubmit(todoItem);
  };
  const handleChange = (e) => {
    console.log("e", e.target.value);
    setTodoItem({
      ...todoItem,
      content: e.target.value,
    });
  };
  return (
    <div className="todo-item-input">
      <Input
        value={todoItem.content}
        onPressEnter={handleSubmit}
        onChange={handleChange}
      />
      <Button size="large" type="primary" onClick={handleSubmit}>
        提交
      </Button>
    </div>
  );
};
export default ToDoItem;
