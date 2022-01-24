/*
 * @Author: luoxi
 * @LastEditTime: 2022-01-24 22:03:43
 * @LastEditors: your name
 * @Description:
 */
import React, { useState } from "react";
import { Input, Button } from "antd";
import { STATUS } from "../../config/status";
const ToDoItem = (props) => {
  const { onSubmit } = props;
  const [todoItem, setTodoItem] = useState({});

  const handleSubmit = () => {
    console.log("handleSubmit");
    onSubmit && onSubmit(todoItem);
  };
  const handleChange = (e) => {
    console.log("e", e.target.value);
    setTodoItem({
      id: Math.random(),
      content: e.target.value,
      status: STATUS.IS_CREATE,
    });
  };

  return (
    <div className="todo-item-input">
      <Input
        placeholder="请输入待办事项"
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
